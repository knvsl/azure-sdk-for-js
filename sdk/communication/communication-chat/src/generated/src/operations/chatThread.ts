/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ChatApiClient } from "../chatApiClient";
import {
  ChatThreadListChatReadReceiptsOptionalParams,
  ChatThreadListChatReadReceiptsResponse,
  SendReadReceiptRequest,
  SendChatMessageRequest,
  ChatThreadSendChatMessageResponse,
  ChatThreadListChatMessagesOptionalParams,
  ChatThreadListChatMessagesResponse,
  ChatThreadGetChatMessageResponse,
  UpdateChatMessageRequest,
  ChatThreadListChatParticipantsOptionalParams,
  ChatThreadListChatParticipantsResponse,
  AddChatParticipantsRequest,
  ChatThreadAddChatParticipantsResponse,
  UpdateChatThreadRequest,
  ChatThreadListChatReadReceiptsNextOptionalParams,
  ChatThreadListChatReadReceiptsNextResponse,
  ChatThreadListChatMessagesNextOptionalParams,
  ChatThreadListChatMessagesNextResponse,
  ChatThreadListChatParticipantsNextOptionalParams,
  ChatThreadListChatParticipantsNextResponse
} from "../models";

/**
 * Class representing a ChatThread.
 */
export class ChatThread {
  private readonly client: ChatApiClient;

  /**
   * Initialize a new instance of the class ChatThread class.
   * @param client Reference to the service client
   */
  constructor(client: ChatApiClient) {
    this.client = client;
  }

  /**
   * Gets chat message read receipts for a thread.
   * @param chatThreadId Thread id to get the chat message read receipts for.
   * @param options The options parameters.
   */
  listChatReadReceipts(
    chatThreadId: string,
    options?: ChatThreadListChatReadReceiptsOptionalParams
  ): Promise<ChatThreadListChatReadReceiptsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { chatThreadId, options: operationOptions },
      listChatReadReceiptsOperationSpec
    ) as Promise<ChatThreadListChatReadReceiptsResponse>;
  }

  /**
   * Sends a read receipt event to a thread, on behalf of a user.
   * @param chatThreadId Thread id to send the read receipt event to.
   * @param sendReadReceiptRequest Read receipt details.
   * @param options The options parameters.
   */
  sendChatReadReceipt(
    chatThreadId: string,
    sendReadReceiptRequest: SendReadReceiptRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { chatThreadId, sendReadReceiptRequest, options: operationOptions },
      sendChatReadReceiptOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Sends a message to a thread.
   * @param chatThreadId The thread id to send the message to.
   * @param sendChatMessageRequest Details of the message to send.
   * @param options The options parameters.
   */
  sendChatMessage(
    chatThreadId: string,
    sendChatMessageRequest: SendChatMessageRequest,
    options?: coreHttp.OperationOptions
  ): Promise<ChatThreadSendChatMessageResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { chatThreadId, sendChatMessageRequest, options: operationOptions },
      sendChatMessageOperationSpec
    ) as Promise<ChatThreadSendChatMessageResponse>;
  }

  /**
   * Gets a list of messages from a thread.
   * @param chatThreadId The thread id of the message.
   * @param options The options parameters.
   */
  listChatMessages(
    chatThreadId: string,
    options?: ChatThreadListChatMessagesOptionalParams
  ): Promise<ChatThreadListChatMessagesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { chatThreadId, options: operationOptions },
      listChatMessagesOperationSpec
    ) as Promise<ChatThreadListChatMessagesResponse>;
  }

  /**
   * Gets a message by id.
   * @param chatThreadId The thread id to which the message was sent.
   * @param chatMessageId The message id.
   * @param options The options parameters.
   */
  getChatMessage(
    chatThreadId: string,
    chatMessageId: string,
    options?: coreHttp.OperationOptions
  ): Promise<ChatThreadGetChatMessageResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { chatThreadId, chatMessageId, options: operationOptions },
      getChatMessageOperationSpec
    ) as Promise<ChatThreadGetChatMessageResponse>;
  }

  /**
   * Updates a message.
   * @param chatThreadId The thread id to which the message was sent.
   * @param chatMessageId The message id.
   * @param updateChatMessageRequest Details of the request to update the message.
   * @param options The options parameters.
   */
  updateChatMessage(
    chatThreadId: string,
    chatMessageId: string,
    updateChatMessageRequest: UpdateChatMessageRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        chatThreadId,
        chatMessageId,
        updateChatMessageRequest,
        options: operationOptions
      },
      updateChatMessageOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Deletes a message.
   * @param chatThreadId The thread id to which the message was sent.
   * @param chatMessageId The message id.
   * @param options The options parameters.
   */
  deleteChatMessage(
    chatThreadId: string,
    chatMessageId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { chatThreadId, chatMessageId, options: operationOptions },
      deleteChatMessageOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Posts a typing event to a thread, on behalf of a user.
   * @param chatThreadId Id of the thread.
   * @param options The options parameters.
   */
  sendTypingNotification(
    chatThreadId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { chatThreadId, options: operationOptions },
      sendTypingNotificationOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets the participants of a thread.
   * @param chatThreadId Thread id to get participants for.
   * @param options The options parameters.
   */
  listChatParticipants(
    chatThreadId: string,
    options?: ChatThreadListChatParticipantsOptionalParams
  ): Promise<ChatThreadListChatParticipantsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { chatThreadId, options: operationOptions },
      listChatParticipantsOperationSpec
    ) as Promise<ChatThreadListChatParticipantsResponse>;
  }

  /**
   * Remove a participant from a thread.
   * @param chatThreadId Thread id to remove the participant from.
   * @param chatParticipantId Id of the thread participant to remove from the thread.
   * @param options The options parameters.
   */
  removeChatParticipant(
    chatThreadId: string,
    chatParticipantId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { chatThreadId, chatParticipantId, options: operationOptions },
      removeChatParticipantOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Adds thread participants to a thread. If participants already exist, no change occurs.
   * @param chatThreadId Id of the thread to add participants to.
   * @param addChatParticipantsRequest Thread participants to be added to the thread.
   * @param options The options parameters.
   */
  addChatParticipants(
    chatThreadId: string,
    addChatParticipantsRequest: AddChatParticipantsRequest,
    options?: coreHttp.OperationOptions
  ): Promise<ChatThreadAddChatParticipantsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { chatThreadId, addChatParticipantsRequest, options: operationOptions },
      addChatParticipantsOperationSpec
    ) as Promise<ChatThreadAddChatParticipantsResponse>;
  }

  /**
   * Updates a thread's properties.
   * @param chatThreadId The id of the thread to update.
   * @param updateChatThreadRequest Request payload for updating a chat thread.
   * @param options The options parameters.
   */
  updateChatThread(
    chatThreadId: string,
    updateChatThreadRequest: UpdateChatThreadRequest,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { chatThreadId, updateChatThreadRequest, options: operationOptions },
      updateChatThreadOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * ListChatReadReceiptsNext
   * @param chatThreadId Thread id to get the chat message read receipts for.
   * @param nextLink The nextLink from the previous successful call to the ListChatReadReceipts method.
   * @param options The options parameters.
   */
  listChatReadReceiptsNext(
    chatThreadId: string,
    nextLink: string,
    options?: ChatThreadListChatReadReceiptsNextOptionalParams
  ): Promise<ChatThreadListChatReadReceiptsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { chatThreadId, nextLink, options: operationOptions },
      listChatReadReceiptsNextOperationSpec
    ) as Promise<ChatThreadListChatReadReceiptsNextResponse>;
  }

  /**
   * ListChatMessagesNext
   * @param chatThreadId The thread id of the message.
   * @param nextLink The nextLink from the previous successful call to the ListChatMessages method.
   * @param options The options parameters.
   */
  listChatMessagesNext(
    chatThreadId: string,
    nextLink: string,
    options?: ChatThreadListChatMessagesNextOptionalParams
  ): Promise<ChatThreadListChatMessagesNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { chatThreadId, nextLink, options: operationOptions },
      listChatMessagesNextOperationSpec
    ) as Promise<ChatThreadListChatMessagesNextResponse>;
  }

  /**
   * ListChatParticipantsNext
   * @param chatThreadId Thread id to get participants for.
   * @param nextLink The nextLink from the previous successful call to the ListChatParticipants method.
   * @param options The options parameters.
   */
  listChatParticipantsNext(
    chatThreadId: string,
    nextLink: string,
    options?: ChatThreadListChatParticipantsNextOptionalParams
  ): Promise<ChatThreadListChatParticipantsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { chatThreadId, nextLink, options: operationOptions },
      listChatParticipantsNextOperationSpec
    ) as Promise<ChatThreadListChatParticipantsNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listChatReadReceiptsOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/readReceipts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessageReadReceiptsCollection
    },
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.maxPageSize, Parameters.skip, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  serializer
};
const sendChatReadReceiptOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/readReceipts",
  httpMethod: "POST",
  responses: {
    200: {},
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.sendReadReceiptRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const sendChatMessageOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.SendChatMessageResult
    },
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.sendChatMessageRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listChatMessagesOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessagesCollection
    },
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.maxPageSize, Parameters.apiVersion, Parameters.startTime],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  serializer
};
const getChatMessageOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages/{chatMessageId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessage
    },
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId, Parameters.chatMessageId],
  serializer
};
const updateChatMessageOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages/{chatMessageId}",
  httpMethod: "PATCH",
  responses: {
    204: {},
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.updateChatMessageRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId, Parameters.chatMessageId],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const deleteChatMessageOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/messages/{chatMessageId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId, Parameters.chatMessageId],
  serializer
};
const sendTypingNotificationOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/typing",
  httpMethod: "POST",
  responses: {
    200: {},
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  serializer
};
const listChatParticipantsOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/participants",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatParticipantsCollection
    },
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.maxPageSize, Parameters.skip, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  serializer
};
const removeChatParticipantOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/participants/{chatParticipantId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId, Parameters.chatParticipantId],
  serializer
};
const addChatParticipantsOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}/participants/:add",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.AddChatParticipantsResult
    },
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.addChatParticipantsRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateChatThreadOperationSpec: coreHttp.OperationSpec = {
  path: "/chat/threads/{chatThreadId}",
  httpMethod: "PATCH",
  responses: {
    204: {},
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.updateChatThreadRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const listChatReadReceiptsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessageReadReceiptsCollection
    },
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.maxPageSize, Parameters.skip, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId, Parameters.nextLink],
  serializer
};
const listChatMessagesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatMessagesCollection
    },
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.maxPageSize, Parameters.apiVersion, Parameters.startTime],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId, Parameters.nextLink],
  serializer
};
const listChatParticipantsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatParticipantsCollection
    },
    401: {
      bodyMapper: Mappers.ErrorModel
    },
    403: {
      bodyMapper: Mappers.ErrorModel
    },
    429: {
      bodyMapper: Mappers.ErrorModel
    },
    503: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.maxPageSize, Parameters.skip, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.chatThreadId, Parameters.nextLink],
  serializer
};
