import {
  ReceiveMode,
  ServiceBusClient,
  ServiceBusReceivedMessage,
  ServiceBusReceiver
} from "@azure/service-bus";
import { SBStressTestsBase } from "./stressTestsBase";
import { delay } from "rhea-promise";
import parsedArgs from "minimist";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// Define connection string and related Service Bus entity names here
const connectionString = process.env.SERVICEBUS_CONNECTION_STRING || "<connection string>";

interface ScenarioStreamingReceiveOptions {
  testDurationInMs?: number;
  receiveMode?: ReceiveMode;
  autoComplete?: boolean;
  maxConcurrentCalls?: number;
  maxAutoRenewLockDurationInMs?: number;
  manualLockRenewal: boolean;
  numberOfMessagesPerSend?: number;
  delayBetweenSendsInMs?: number;
  totalNumberOfMessagesToSend?: number;
  completeMessageAfterDuration?: boolean;
  settleMessageOnReceive?: boolean;
}

function sanitizeOptions(
  options: ScenarioStreamingReceiveOptions
): Required<ScenarioStreamingReceiveOptions> {
  return {
    testDurationInMs: options.testDurationInMs || 60 * 60 * 1000, // Default = 60 minutes
    receiveMode: (options.receiveMode as ReceiveMode) || "peekLock",
    autoComplete: options.autoComplete || true,
    maxConcurrentCalls: options.maxConcurrentCalls || 100,
    maxAutoRenewLockDurationInMs: options.maxAutoRenewLockDurationInMs || 0,
    manualLockRenewal: options.manualLockRenewal || true,
    numberOfMessagesPerSend: options.numberOfMessagesPerSend || 1,
    delayBetweenSendsInMs: options.delayBetweenSendsInMs || 0,
    totalNumberOfMessagesToSend: options.totalNumberOfMessagesToSend || Infinity,
    completeMessageAfterDuration: options.completeMessageAfterDuration || true,
    settleMessageOnReceive: options.settleMessageOnReceive || false
  };
}

export async function scenarioStreamingReceive() {
  const testOptions = sanitizeOptions(parsedArgs<ScenarioStreamingReceiveOptions>(process.argv));
  const {
    testDurationInMs,
    receiveMode,
    autoComplete,
    maxConcurrentCalls,
    manualLockRenewal,
    maxAutoRenewLockDurationInMs,
    numberOfMessagesPerSend,
    delayBetweenSendsInMs,
    totalNumberOfMessagesToSend,
    completeMessageAfterDuration,
    settleMessageOnReceive
  } = testOptions;

  const testDurationForSendInMs = testDurationInMs * 0.7;
  const startedAt = new Date();

  const stressBase = new SBStressTestsBase({
    snapshotFocus: ["send-info", "receive-info", "message-lock-renewal-info"]
  });
  const sbClient = new ServiceBusClient(connectionString);

  await stressBase.init(undefined, undefined, testOptions);
  const sender = sbClient.createSender(stressBase.queueName);
  let receiver: ServiceBusReceiver<ServiceBusReceivedMessage>;

  if (receiveMode === "receiveAndDelete") {
    receiver = sbClient.createReceiver(stressBase.queueName, {
      receiveMode: "receiveAndDelete",
      maxAutoLockRenewalDurationInMs: maxAutoRenewLockDurationInMs
    });
  } else {
    receiver = sbClient.createReceiver(stressBase.queueName);
  }

  // Sending
  async function sendMessages() {
    let elapsedTime = new Date().valueOf() - startedAt.valueOf();
    while (
      elapsedTime < testDurationForSendInMs &&
      stressBase.messagesSent.length < totalNumberOfMessagesToSend
    ) {
      await stressBase.sendMessages([sender], numberOfMessagesPerSend);
      elapsedTime = new Date().valueOf() - startedAt.valueOf();
      await delay(delayBetweenSendsInMs);
    }
  }

  // Resolve
  await Promise.all([
    sendMessages(),
    stressBase.receiveStreaming(receiver, testDurationInMs, {
      autoComplete,
      maxConcurrentCalls,
      maxAutoRenewLockDurationInMs,
      manualLockRenewal,
      completeMessageAfterDuration,
      settleMessageOnReceive
    })
  ]);
  await sbClient.close();

  await stressBase.end();
}

scenarioStreamingReceive().catch((err) => {
  console.log("Error occurred: ", err);
});
