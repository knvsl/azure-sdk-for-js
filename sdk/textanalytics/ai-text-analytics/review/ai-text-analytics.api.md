## API Report File for "@azure/ai-text-analytics"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AzureKeyCredential } from '@azure/core-auth';
import { KeyCredential } from '@azure/core-auth';
import { OperationOptions } from '@azure/core-http';
import { PipelineOptions } from '@azure/core-http';
import { TokenCredential } from '@azure/core-auth';

// @public
export type AnalyzeSentimentErrorResult = TextAnalyticsErrorResult;

// @public
export type AnalyzeSentimentOptions = TextAnalyticsOperationOptions;

// @public
export type AnalyzeSentimentResult = AnalyzeSentimentSuccessResult | AnalyzeSentimentErrorResult;

// @public
export interface AnalyzeSentimentResultCollection extends Array<AnalyzeSentimentResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface AnalyzeSentimentSuccessResult extends TextAnalyticsSuccessResult {
    confidenceScores: SentimentConfidenceScores;
    sentences: SentenceSentiment[];
    sentiment: DocumentSentimentLabel;
}

export { AzureKeyCredential }

// @public
export interface CategorizedEntity extends Entity {
}

// @public
export interface DetectedLanguage {
    iso6391Name: string;
    name: string;
    score: number;
}

// @public
export type DetectLanguageErrorResult = TextAnalyticsErrorResult;

// @public
export interface DetectLanguageInput {
    // (undocumented)
    countryHint?: string;
    id: string;
    // (undocumented)
    text: string;
}

// @public
export type DetectLanguageOptions = TextAnalyticsOperationOptions;

// @public
export type DetectLanguageResult = DetectLanguageSuccessResult | DetectLanguageErrorResult;

// @public
export interface DetectLanguageResultCollection extends Array<DetectLanguageResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface DetectLanguageSuccessResult extends TextAnalyticsSuccessResult {
    readonly primaryLanguage: DetectedLanguage;
}

// @public
export type DocumentSentimentLabel = 'positive' | 'neutral' | 'negative' | 'mixed';

// @public
export interface Entity {
    category: string;
    graphemeLength: number;
    graphemeOffset: number;
    score: number;
    subCategory?: string;
    text: string;
}

// @public
export type ErrorCode = ErrorCodeValue | InnerErrorCodeValue;

// @public
export type ErrorCodeValue = 'InvalidRequest' | 'InvalidArgument' | 'InternalServerError' | 'ServiceUnavailable';

// @public
export type ExtractKeyPhrasesErrorResult = TextAnalyticsErrorResult;

// @public
export type ExtractKeyPhrasesOptions = TextAnalyticsOperationOptions;

// @public
export type ExtractKeyPhrasesResult = ExtractKeyPhrasesSuccessResult | ExtractKeyPhrasesErrorResult;

// @public
export interface ExtractKeyPhrasesResultCollection extends Array<ExtractKeyPhrasesResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface ExtractKeyPhrasesSuccessResult extends TextAnalyticsSuccessResult {
    keyPhrases: string[];
}

// @public
export type InnerErrorCodeValue = 'InvalidParameterValue' | 'InvalidRequestBodyFormat' | 'EmptyRequest' | 'MissingInputRecords' | 'InvalidDocument' | 'ModelVersionIncorrect' | 'InvalidDocumentBatch' | 'UnsupportedLanguageCode' | 'InvalidCountryHint';

// @public
export interface LinkedEntity {
    dataSource: string;
    dataSourceEntityId?: string;
    language: string;
    matches: Match[];
    name: string;
    url: string;
}

// @public
export interface Match {
    graphemeLength: number;
    graphemeOffset: number;
    score: number;
    text: string;
}

// @public
export type RecognizeCategorizedEntitiesErrorResult = TextAnalyticsErrorResult;

// @public
export type RecognizeCategorizedEntitiesOptions = TextAnalyticsOperationOptions;

// @public
export type RecognizeCategorizedEntitiesResult = RecognizeCategorizedEntitiesSuccessResult | RecognizeCategorizedEntitiesErrorResult;

// @public
export interface RecognizeCategorizedEntitiesResultCollection extends Array<RecognizeCategorizedEntitiesResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface RecognizeCategorizedEntitiesSuccessResult extends TextAnalyticsSuccessResult {
    readonly entities: CategorizedEntity[];
}

// @public
export type RecognizeLinkedEntitiesErrorResult = TextAnalyticsErrorResult;

// @public
export type RecognizeLinkedEntitiesOptions = TextAnalyticsOperationOptions;

// @public
export type RecognizeLinkedEntitiesResult = RecognizeLinkedEntitiesSuccessResult | RecognizeLinkedEntitiesErrorResult;

// @public
export interface RecognizeLinkedEntitiesResultCollection extends Array<RecognizeLinkedEntitiesResult> {
    modelVersion: string;
    statistics?: TextDocumentBatchStatistics;
}

// @public
export interface RecognizeLinkedEntitiesSuccessResult extends TextAnalyticsSuccessResult {
    readonly entities: LinkedEntity[];
}

// @public
export interface SentenceSentiment {
    confidenceScores: SentimentConfidenceScores;
    graphemeLength: number;
    graphemeOffset: number;
    sentiment: SentenceSentimentLabel;
    warnings?: string[];
}

// @public
export type SentenceSentimentLabel = 'positive' | 'neutral' | 'negative';

// @public
export interface SentimentConfidenceScores {
    // (undocumented)
    negative: number;
    // (undocumented)
    neutral: number;
    // (undocumented)
    positive: number;
}

// @public
export class TextAnalyticsClient {
    constructor(endpointUrl: string, credential: TokenCredential | KeyCredential, options?: TextAnalyticsClientOptions);
    analyzeSentiment(documents: string[], language?: string, options?: AnalyzeSentimentOptions): Promise<AnalyzeSentimentResultCollection>;
    analyzeSentiment(documents: TextDocumentInput[], options?: AnalyzeSentimentOptions): Promise<AnalyzeSentimentResultCollection>;
    defaultCountryHint: string;
    defaultLanguage: string;
    detectLanguage(documents: string[], countryHint?: string, options?: DetectLanguageOptions): Promise<DetectLanguageResultCollection>;
    detectLanguage(documents: DetectLanguageInput[], options?: DetectLanguageOptions): Promise<DetectLanguageResultCollection>;
    readonly endpointUrl: string;
    extractKeyPhrases(documents: string[], language?: string, options?: ExtractKeyPhrasesOptions): Promise<ExtractKeyPhrasesResultCollection>;
    extractKeyPhrases(documents: TextDocumentInput[], options?: ExtractKeyPhrasesOptions): Promise<ExtractKeyPhrasesResultCollection>;
    recognizeEntities(documents: string[], language?: string, options?: RecognizeCategorizedEntitiesOptions): Promise<RecognizeCategorizedEntitiesResultCollection>;
    recognizeEntities(documents: TextDocumentInput[], options?: RecognizeCategorizedEntitiesOptions): Promise<RecognizeCategorizedEntitiesResultCollection>;
    recognizeLinkedEntities(documents: string[], language?: string, options?: RecognizeLinkedEntitiesOptions): Promise<RecognizeLinkedEntitiesResultCollection>;
    recognizeLinkedEntities(documents: TextDocumentInput[], options?: RecognizeLinkedEntitiesOptions): Promise<RecognizeLinkedEntitiesResultCollection>;
}

// @public
export interface TextAnalyticsClientOptions extends PipelineOptions {
    defaultCountryHint?: string;
    defaultLanguage?: string;
}

// @public
export interface TextAnalyticsError {
    readonly code: ErrorCode;
    readonly message: string;
    readonly target?: string;
}

// @public
export interface TextAnalyticsErrorResult {
    readonly error: TextAnalyticsError;
    readonly id: string;
}

// @public
export interface TextAnalyticsOperationOptions extends OperationOptions {
    includeStatistics?: boolean;
    modelVersion?: string;
}

// @public
export type TextAnalyticsResult = TextAnalyticsSuccessResult | TextAnalyticsErrorResult;

// @public
export interface TextAnalyticsSuccessResult {
    readonly error?: undefined;
    readonly id: string;
    readonly statistics?: TextDocumentStatistics;
}

// @public
export interface TextDocumentBatchStatistics {
    documentCount: number;
    erroneousDocumentCount: number;
    transactionCount: number;
    validDocumentCount: number;
}

// @public
export interface TextDocumentInput {
    id: string;
    language?: string;
    text: string;
}

// @public
export interface TextDocumentStatistics {
    graphemeCount: number;
    transactionCount: number;
}


// (No @packageDocumentation comment for this package)

```