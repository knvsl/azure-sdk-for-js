/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/**
 * Role definition.
 */
export interface RoleDefinition {
  /**
   * The role definition ID.
   */
  readonly id?: string;
  /**
   * The role definition name.
   */
  readonly name?: string;
  /**
   * The role definition type.
   */
  readonly type?: RoleDefinitionType;
  /**
   * The role name.
   */
  roleName?: string;
  /**
   * The role definition description.
   */
  description?: string;
  /**
   * The role type.
   */
  roleType?: RoleType;
  /**
   * Role definition permissions.
   */
  permissions?: Permission[];
  /**
   * Role definition assignable scopes.
   */
  assignableScopes?: RoleScope[];
}

/**
 * Role definition properties.
 */
export interface RoleDefinitionProperties {
  /**
   * The role name.
   */
  roleName?: string;
  /**
   * The role definition description.
   */
  description?: string;
  /**
   * The role type.
   */
  roleType?: RoleType;
  /**
   * Role definition permissions.
   */
  permissions?: Permission[];
  /**
   * Role definition assignable scopes.
   */
  assignableScopes?: RoleScope[];
}

/**
 * Role definition permissions.
 */
export interface Permission {
  /**
   * Action permissions that are granted.
   */
  actions?: string[];
  /**
   * Action permissions that are excluded but not denied. They may be granted by other role definitions assigned to a principal.
   */
  notActions?: string[];
  /**
   * Data action permissions that are granted.
   */
  dataActions?: DataAction[];
  /**
   * Data action permissions that are excluded but not denied. They may be granted by other role definitions assigned to a principal.
   */
  notDataActions?: DataAction[];
}

/**
 * The key vault error exception.
 */
export interface KeyVaultError {
  /**
   * The key vault server error.
   */
  readonly error?: ErrorModel;
}

/**
 * The key vault server error.
 */
export interface ErrorModel {
  /**
   * The error code.
   */
  readonly code?: string;
  /**
   * The error message.
   */
  readonly message?: string;
  /**
   * The key vault server error.
   */
  readonly innerError?: ErrorModel;
}

/**
 * Role definition create parameters.
 */
export interface RoleDefinitionCreateParameters {
  /**
   * Role definition properties.
   */
  properties: RoleDefinitionProperties;
}

/**
 * Role definition list operation result.
 */
export interface RoleDefinitionListResult {
  /**
   * Role definition list.
   */
  value?: RoleDefinition[];
  /**
   * The URL to use for getting the next set of results.
   */
  nextLink?: string;
}

/**
 * Role Assignments
 */
export interface RoleAssignment {
  /**
   * The role assignment ID.
   */
  readonly id?: string;
  /**
   * The role assignment name.
   */
  readonly name?: string;
  /**
   * The role assignment type.
   */
  readonly type?: string;
  /**
   * Role assignment properties.
   */
  properties?: RoleAssignmentPropertiesWithScope;
}

/**
 * Role assignment properties with scope.
 */
export interface RoleAssignmentPropertiesWithScope {
  /**
   * The role scope.
   */
  scope?: RoleScope;
  /**
   * The role definition ID.
   */
  roleDefinitionId?: string;
  /**
   * The principal ID.
   */
  principalId?: string;
}

/**
 * Role assignment create parameters.
 */
export interface RoleAssignmentCreateParameters {
  /**
   * Role assignment properties.
   */
  properties: RoleAssignmentProperties;
}

/**
 * Role assignment properties.
 */
export interface RoleAssignmentProperties {
  /**
   * The role definition ID used in the role assignment.
   */
  roleDefinitionId: string;
  /**
   * The principal ID assigned to the role. This maps to the ID inside the Active Directory. It can point to a user, service principal, or security group.
   */
  principalId: string;
}

/**
 * Role assignment list operation result.
 */
export interface RoleAssignmentListResult {
  /**
   * Role assignment list.
   */
  value?: RoleAssignment[];
  /**
   * The URL to use for getting the next set of results.
   */
  nextLink?: string;
}

export interface SASTokenParameter {
  /**
   * Azure Blob storage container Uri
   */
  storageResourceUri: string;
  /**
   * The SAS token pointing to an Azure Blob storage container
   */
  token: string;
}

/**
 * Full backup operation
 */
export interface FullBackupOperation {
  /**
   * Status of the backup operation.
   */
  status?: string;
  /**
   * The status details of backup operation.
   */
  statusDetails?: string;
  /**
   * Error encountered, if any, during the full backup operation.
   */
  error?: ErrorModel;
  /**
   * The start time of the backup operation in UTC
   */
  startTime?: Date;
  /**
   * The end time of the backup operation in UTC
   */
  endTime?: Date;
  /**
   * Identifier for the full backup operation.
   */
  jobId?: string;
  /**
   * The Azure blob storage container Uri which contains the full backup
   */
  azureStorageBlobContainerUri?: string;
}

export interface RestoreOperationParameters {
  /**
   * SAS token parameter object containing Azure storage resourceUri and token
   */
  sasTokenParameters: SASTokenParameter;
  /**
   * The Folder name of the blob where the previous successful full backup was stored
   */
  folderToRestore: string;
}

/**
 * Restore operation
 */
export interface RestoreOperation {
  /**
   * Status of the restore operation.
   */
  status?: string;
  /**
   * The status details of restore operation.
   */
  statusDetails?: string;
  /**
   * Error encountered, if any, during the restore operation.
   */
  error?: ErrorModel;
  /**
   * Identifier for the restore operation.
   */
  jobId?: string;
  /**
   * The start time of the restore operation
   */
  startTime?: Date;
  /**
   * The end time of the restore operation
   */
  endTime?: Date;
}

export interface SelectiveKeyRestoreOperationParameters {
  /**
   * SAS token parameter object containing Azure storage resourceUri and token
   */
  sasTokenParameters: SASTokenParameter;
  /**
   * The Folder name of the blob where the previous successful full backup was stored
   */
  folder: string;
}

/**
 * Selective Key Restore operation
 */
export interface SelectiveKeyRestoreOperation {
  /**
   * Status of the restore operation.
   */
  status?: string;
  /**
   * The status details of restore operation.
   */
  statusDetails?: string;
  /**
   * Error encountered, if any, during the selective key restore operation.
   */
  error?: ErrorModel;
  /**
   * Identifier for the selective key restore operation.
   */
  jobId?: string;
  /**
   * The start time of the restore operation
   */
  startTime?: Date;
  /**
   * The end time of the restore operation
   */
  endTime?: Date;
}

/**
 * Role Assignments filter
 */
export interface RoleAssignmentFilter {
  /**
   * Returns role assignment of the specific principal.
   */
  principalId?: string;
}

/**
 * Role Definitions filter
 */
export interface RoleDefinitionFilter {
  /**
   * Returns role definition with the specific name.
   */
  roleName?: string;
}

/**
 * Defines headers for KeyVaultClient_fullBackup operation.
 */
export interface KeyVaultClientFullBackupHeaders {
  /**
   * The recommended number of seconds to wait before calling the URI specified in Azure-AsyncOperation.
   */
  retryAfter?: number;
  /**
   * The URI to poll for completion status.
   */
  azureAsyncOperation?: string;
}

/**
 * Defines headers for KeyVaultClient_fullRestoreOperation operation.
 */
export interface KeyVaultClientFullRestoreOperationHeaders {
  /**
   * The recommended number of seconds to wait before calling the URI specified in Azure-AsyncOperation.
   */
  retryAfter?: number;
  /**
   * The URI to poll for completion status.
   */
  azureAsyncOperation?: string;
}

/**
 * Defines headers for KeyVaultClient_selectiveKeyRestoreOperation operation.
 */
export interface KeyVaultClientSelectiveKeyRestoreOperationHeaders {
  /**
   * The recommended number of seconds to wait before calling the URI specified in Azure-AsyncOperation.
   */
  retryAfter?: number;
  /**
   * The URI to poll for completion status.
   */
  azureAsyncOperation?: string;
}

/**
 * Defines values for RoleDefinitionType.
 */
export type RoleDefinitionType =
  | "Microsoft.Authorization/roleDefinitions"
  | string;
/**
 * Defines values for RoleType.
 */
export type RoleType = "AKVBuiltInRole" | "CustomRole" | string;
/**
 * Defines values for DataAction.
 */
export type DataAction =
  | "Microsoft.KeyVault/managedHsm/keys/read/action"
  | "Microsoft.KeyVault/managedHsm/keys/write/action"
  | "Microsoft.KeyVault/managedHsm/keys/deletedKeys/read/action"
  | "Microsoft.KeyVault/managedHsm/keys/deletedKeys/recover/action"
  | "Microsoft.KeyVault/managedHsm/keys/backup/action"
  | "Microsoft.KeyVault/managedHsm/keys/restore/action"
  | "Microsoft.KeyVault/managedHsm/roleAssignments/delete/action"
  | "Microsoft.KeyVault/managedHsm/roleAssignments/read/action"
  | "Microsoft.KeyVault/managedHsm/roleAssignments/write/action"
  | "Microsoft.KeyVault/managedHsm/roleDefinitions/read/action"
  | "Microsoft.KeyVault/managedHsm/keys/encrypt/action"
  | "Microsoft.KeyVault/managedHsm/keys/decrypt/action"
  | "Microsoft.KeyVault/managedHsm/keys/wrap/action"
  | "Microsoft.KeyVault/managedHsm/keys/unwrap/action"
  | "Microsoft.KeyVault/managedHsm/keys/sign/action"
  | "Microsoft.KeyVault/managedHsm/keys/verify/action"
  | "Microsoft.KeyVault/managedHsm/keys/create"
  | "Microsoft.KeyVault/managedHsm/keys/delete"
  | "Microsoft.KeyVault/managedHsm/keys/export/action"
  | "Microsoft.KeyVault/managedHsm/keys/import/action"
  | "Microsoft.KeyVault/managedHsm/keys/deletedKeys/delete"
  | "Microsoft.KeyVault/managedHsm/securitydomain/download/action"
  | "Microsoft.KeyVault/managedHsm/securitydomain/upload/action"
  | "Microsoft.KeyVault/managedHsm/securitydomain/upload/read"
  | "Microsoft.KeyVault/managedHsm/securitydomain/transferkey/read"
  | "Microsoft.KeyVault/managedHsm/backup/start/action"
  | "Microsoft.KeyVault/managedHsm/restore/start/action"
  | "Microsoft.KeyVault/managedHsm/backup/status/action"
  | "Microsoft.KeyVault/managedHsm/restore/status/action"
  | string;
/**
 * Defines values for RoleScope.
 */
export type RoleScope = "/" | "/keys" | string;

/**
 * Contains response data for the delete operation.
 */
export type RoleDefinitionsDeleteResponse = RoleDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: RoleDefinition;
  };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type RoleDefinitionsCreateOrUpdateResponse = RoleDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: RoleDefinition;
  };
};

/**
 * Contains response data for the get operation.
 */
export type RoleDefinitionsGetResponse = RoleDefinition & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: RoleDefinition;
  };
};

/**
 * Optional parameters.
 */
export interface RoleDefinitionsListOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * The filter to apply on the operation. Use atScopeAndBelow filter to search below the given scope as well.
   */
  filter?: string;
}

/**
 * Contains response data for the list operation.
 */
export type RoleDefinitionsListResponse = RoleDefinitionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: RoleDefinitionListResult;
  };
};

/**
 * Optional parameters.
 */
export interface RoleDefinitionsListNextOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * The filter to apply on the operation. Use atScopeAndBelow filter to search below the given scope as well.
   */
  filter?: string;
}

/**
 * Contains response data for the listNext operation.
 */
export type RoleDefinitionsListNextResponse = RoleDefinitionListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: RoleDefinitionListResult;
  };
};

/**
 * Contains response data for the delete operation.
 */
export type RoleAssignmentsDeleteResponse = RoleAssignment & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: RoleAssignment;
  };
};

/**
 * Contains response data for the create operation.
 */
export type RoleAssignmentsCreateResponse = RoleAssignment & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: RoleAssignment;
  };
};

/**
 * Contains response data for the get operation.
 */
export type RoleAssignmentsGetResponse = RoleAssignment & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: RoleAssignment;
  };
};

/**
 * Optional parameters.
 */
export interface RoleAssignmentsListForScopeOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
   */
  filter?: string;
}

/**
 * Contains response data for the listForScope operation.
 */
export type RoleAssignmentsListForScopeResponse = RoleAssignmentListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: RoleAssignmentListResult;
  };
};

/**
 * Optional parameters.
 */
export interface RoleAssignmentsListForScopeNextOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * The filter to apply on the operation. Use $filter=atScope() to return all role assignments at or above the scope. Use $filter=principalId eq {id} to return all role assignments at, above or below the scope for the specified principal.
   */
  filter?: string;
}

/**
 * Contains response data for the listForScopeNext operation.
 */
export type RoleAssignmentsListForScopeNextResponse = RoleAssignmentListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: RoleAssignmentListResult;
  };
};

/**
 * Optional parameters.
 */
export interface KeyVaultClientFullBackupOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Azure blob shared access signature token pointing to a valid Azure blob container where full backup needs to be stored. This token needs to be valid for at least next 24 hours from the time of making this call
   */
  azureStorageBlobContainerUri?: SASTokenParameter;
}

/**
 * Contains response data for the fullBackup operation.
 */
export type KeyVaultClientFullBackupResponse = KeyVaultClientFullBackupHeaders &
  FullBackupOperation & {
    /**
     * The underlying HTTP response.
     */
    _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FullBackupOperation;
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: KeyVaultClientFullBackupHeaders;
    };
  };

/**
 * Contains response data for the fullBackupStatus operation.
 */
export type KeyVaultClientFullBackupStatusResponse = FullBackupOperation & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: FullBackupOperation;
  };
};

/**
 * Optional parameters.
 */
export interface KeyVaultClientFullRestoreOperationOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * The Azure blob SAS token pointing to a folder where the previous successful full backup was stored
   */
  restoreBlobDetails?: RestoreOperationParameters;
}

/**
 * Contains response data for the fullRestoreOperation operation.
 */
export type KeyVaultClientFullRestoreOperationResponse = KeyVaultClientFullRestoreOperationHeaders &
  RestoreOperation & {
    /**
     * The underlying HTTP response.
     */
    _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RestoreOperation;
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: KeyVaultClientFullRestoreOperationHeaders;
    };
  };

/**
 * Contains response data for the restoreStatus operation.
 */
export type KeyVaultClientRestoreStatusResponse = RestoreOperation & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: RestoreOperation;
  };
};

/**
 * Optional parameters.
 */
export interface KeyVaultClientSelectiveKeyRestoreOperationOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * The Azure blob SAS token pointing to a folder where the previous successful full backup was stored
   */
  restoreBlobDetails?: SelectiveKeyRestoreOperationParameters;
}

/**
 * Contains response data for the selectiveKeyRestoreOperation operation.
 */
export type KeyVaultClientSelectiveKeyRestoreOperationResponse = KeyVaultClientSelectiveKeyRestoreOperationHeaders &
  SelectiveKeyRestoreOperation & {
    /**
     * The underlying HTTP response.
     */
    _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SelectiveKeyRestoreOperation;
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: KeyVaultClientSelectiveKeyRestoreOperationHeaders;
    };
  };

/**
 * Optional parameters.
 */
export interface KeyVaultClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * Api Version
   */
  apiVersion?: string;
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
