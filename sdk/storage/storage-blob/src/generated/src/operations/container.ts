/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/containerMappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";

/** Class representing a Container. */
export class Container {
  private readonly client: StorageClientContext;

  /**
   * Create a Container.
   * @param {StorageClientContext} client Reference to the service client.
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * creates a new container under the specified account. If the container with the same name already
   * exists, the operation fails
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerCreateResponse>
   */
  create(options?: Models.ContainerCreateOptionalParams): Promise<Models.ContainerCreateResponse>;
  /**
   * @param callback The callback
   */
  create(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  create(options: Models.ContainerCreateOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  create(options?: Models.ContainerCreateOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ContainerCreateResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      createOperationSpec,
      callback) as Promise<Models.ContainerCreateResponse>;
  }

  /**
   * returns all user-defined metadata and system properties for the specified container. The data
   * returned does not include the container's list of blobs
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerGetPropertiesResponse>
   */
  getProperties(options?: Models.ContainerGetPropertiesOptionalParams): Promise<Models.ContainerGetPropertiesResponse>;
  /**
   * @param callback The callback
   */
  getProperties(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getProperties(options: Models.ContainerGetPropertiesOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  getProperties(options?: Models.ContainerGetPropertiesOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ContainerGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPropertiesOperationSpec,
      callback) as Promise<Models.ContainerGetPropertiesResponse>;
  }

  /**
   * operation marks the specified container for deletion. The container and any blobs contained
   * within it are later deleted during garbage collection
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerDeleteResponse>
   */
  deleteMethod(options?: Models.ContainerDeleteMethodOptionalParams): Promise<Models.ContainerDeleteResponse>;
  /**
   * @param callback The callback
   */
  deleteMethod(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(options: Models.ContainerDeleteMethodOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  deleteMethod(options?: Models.ContainerDeleteMethodOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ContainerDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.ContainerDeleteResponse>;
  }

  /**
   * operation sets one or more user-defined name-value pairs for the specified container.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerSetMetadataResponse>
   */
  setMetadata(options?: Models.ContainerSetMetadataOptionalParams): Promise<Models.ContainerSetMetadataResponse>;
  /**
   * @param callback The callback
   */
  setMetadata(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  setMetadata(options: Models.ContainerSetMetadataOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  setMetadata(options?: Models.ContainerSetMetadataOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ContainerSetMetadataResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      setMetadataOperationSpec,
      callback) as Promise<Models.ContainerSetMetadataResponse>;
  }

  /**
   * gets the permissions for the specified container. The permissions indicate whether container
   * data may be accessed publicly.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerGetAccessPolicyResponse>
   */
  getAccessPolicy(options?: Models.ContainerGetAccessPolicyOptionalParams): Promise<Models.ContainerGetAccessPolicyResponse>;
  /**
   * @param callback The callback
   */
  getAccessPolicy(callback: coreHttp.ServiceCallback<Models.SignedIdentifier[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getAccessPolicy(options: Models.ContainerGetAccessPolicyOptionalParams, callback: coreHttp.ServiceCallback<Models.SignedIdentifier[]>): void;
  getAccessPolicy(options?: Models.ContainerGetAccessPolicyOptionalParams | coreHttp.ServiceCallback<Models.SignedIdentifier[]>, callback?: coreHttp.ServiceCallback<Models.SignedIdentifier[]>): Promise<Models.ContainerGetAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getAccessPolicyOperationSpec,
      callback) as Promise<Models.ContainerGetAccessPolicyResponse>;
  }

  /**
   * sets the permissions for the specified container. The permissions indicate whether blobs in a
   * container may be accessed publicly.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerSetAccessPolicyResponse>
   */
  setAccessPolicy(options?: Models.ContainerSetAccessPolicyOptionalParams): Promise<Models.ContainerSetAccessPolicyResponse>;
  /**
   * @param callback The callback
   */
  setAccessPolicy(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  setAccessPolicy(options: Models.ContainerSetAccessPolicyOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  setAccessPolicy(options?: Models.ContainerSetAccessPolicyOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ContainerSetAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      setAccessPolicyOperationSpec,
      callback) as Promise<Models.ContainerSetAccessPolicyResponse>;
  }

  /**
   * Restores a previously-deleted container.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerRestoreResponse>
   */
  restore(options?: Models.ContainerRestoreOptionalParams): Promise<Models.ContainerRestoreResponse>;
  /**
   * @param callback The callback
   */
  restore(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  restore(options: Models.ContainerRestoreOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  restore(options?: Models.ContainerRestoreOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ContainerRestoreResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      restoreOperationSpec,
      callback) as Promise<Models.ContainerRestoreResponse>;
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration
   * can be 15 to 60 seconds, or can be infinite
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerAcquireLeaseResponse>
   */
  acquireLease(options?: Models.ContainerAcquireLeaseOptionalParams): Promise<Models.ContainerAcquireLeaseResponse>;
  /**
   * @param callback The callback
   */
  acquireLease(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  acquireLease(options: Models.ContainerAcquireLeaseOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  acquireLease(options?: Models.ContainerAcquireLeaseOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ContainerAcquireLeaseResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      acquireLeaseOperationSpec,
      callback) as Promise<Models.ContainerAcquireLeaseResponse>;
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration
   * can be 15 to 60 seconds, or can be infinite
   * @param leaseId Specifies the current lease ID on the resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerReleaseLeaseResponse>
   */
  releaseLease(leaseId: string, options?: Models.ContainerReleaseLeaseOptionalParams): Promise<Models.ContainerReleaseLeaseResponse>;
  /**
   * @param leaseId Specifies the current lease ID on the resource.
   * @param callback The callback
   */
  releaseLease(leaseId: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param leaseId Specifies the current lease ID on the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  releaseLease(leaseId: string, options: Models.ContainerReleaseLeaseOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  releaseLease(leaseId: string, options?: Models.ContainerReleaseLeaseOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ContainerReleaseLeaseResponse> {
    return this.client.sendOperationRequest(
      {
        leaseId,
        options
      },
      releaseLeaseOperationSpec,
      callback) as Promise<Models.ContainerReleaseLeaseResponse>;
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration
   * can be 15 to 60 seconds, or can be infinite
   * @param leaseId Specifies the current lease ID on the resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerRenewLeaseResponse>
   */
  renewLease(leaseId: string, options?: Models.ContainerRenewLeaseOptionalParams): Promise<Models.ContainerRenewLeaseResponse>;
  /**
   * @param leaseId Specifies the current lease ID on the resource.
   * @param callback The callback
   */
  renewLease(leaseId: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param leaseId Specifies the current lease ID on the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  renewLease(leaseId: string, options: Models.ContainerRenewLeaseOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  renewLease(leaseId: string, options?: Models.ContainerRenewLeaseOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ContainerRenewLeaseResponse> {
    return this.client.sendOperationRequest(
      {
        leaseId,
        options
      },
      renewLeaseOperationSpec,
      callback) as Promise<Models.ContainerRenewLeaseResponse>;
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration
   * can be 15 to 60 seconds, or can be infinite
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerBreakLeaseResponse>
   */
  breakLease(options?: Models.ContainerBreakLeaseOptionalParams): Promise<Models.ContainerBreakLeaseResponse>;
  /**
   * @param callback The callback
   */
  breakLease(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  breakLease(options: Models.ContainerBreakLeaseOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  breakLease(options?: Models.ContainerBreakLeaseOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ContainerBreakLeaseResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      breakLeaseOperationSpec,
      callback) as Promise<Models.ContainerBreakLeaseResponse>;
  }

  /**
   * [Update] establishes and manages a lock on a container for delete operations. The lock duration
   * can be 15 to 60 seconds, or can be infinite
   * @param leaseId Specifies the current lease ID on the resource.
   * @param proposedLeaseId Proposed lease ID, in a GUID string format. The Blob service returns 400
   * (Invalid request) if the proposed lease ID is not in the correct format. See Guid Constructor
   * (String) for a list of valid GUID string formats.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerChangeLeaseResponse>
   */
  changeLease(leaseId: string, proposedLeaseId: string, options?: Models.ContainerChangeLeaseOptionalParams): Promise<Models.ContainerChangeLeaseResponse>;
  /**
   * @param leaseId Specifies the current lease ID on the resource.
   * @param proposedLeaseId Proposed lease ID, in a GUID string format. The Blob service returns 400
   * (Invalid request) if the proposed lease ID is not in the correct format. See Guid Constructor
   * (String) for a list of valid GUID string formats.
   * @param callback The callback
   */
  changeLease(leaseId: string, proposedLeaseId: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param leaseId Specifies the current lease ID on the resource.
   * @param proposedLeaseId Proposed lease ID, in a GUID string format. The Blob service returns 400
   * (Invalid request) if the proposed lease ID is not in the correct format. See Guid Constructor
   * (String) for a list of valid GUID string formats.
   * @param options The optional parameters
   * @param callback The callback
   */
  changeLease(leaseId: string, proposedLeaseId: string, options: Models.ContainerChangeLeaseOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  changeLease(leaseId: string, proposedLeaseId: string, options?: Models.ContainerChangeLeaseOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ContainerChangeLeaseResponse> {
    return this.client.sendOperationRequest(
      {
        leaseId,
        proposedLeaseId,
        options
      },
      changeLeaseOperationSpec,
      callback) as Promise<Models.ContainerChangeLeaseResponse>;
  }

  /**
   * [Update] The List Blobs operation returns a list of the blobs under the specified container
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerListBlobFlatSegmentResponse>
   */
  listBlobFlatSegment(options?: Models.ContainerListBlobFlatSegmentOptionalParams): Promise<Models.ContainerListBlobFlatSegmentResponse>;
  /**
   * @param callback The callback
   */
  listBlobFlatSegment(callback: coreHttp.ServiceCallback<Models.ListBlobsFlatSegmentResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBlobFlatSegment(options: Models.ContainerListBlobFlatSegmentOptionalParams, callback: coreHttp.ServiceCallback<Models.ListBlobsFlatSegmentResponse>): void;
  listBlobFlatSegment(options?: Models.ContainerListBlobFlatSegmentOptionalParams | coreHttp.ServiceCallback<Models.ListBlobsFlatSegmentResponse>, callback?: coreHttp.ServiceCallback<Models.ListBlobsFlatSegmentResponse>): Promise<Models.ContainerListBlobFlatSegmentResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBlobFlatSegmentOperationSpec,
      callback) as Promise<Models.ContainerListBlobFlatSegmentResponse>;
  }

  /**
   * [Update] The List Blobs operation returns a list of the blobs under the specified container
   * @param delimiter When the request includes this parameter, the operation returns a BlobPrefix
   * element in the response body that acts as a placeholder for all blobs whose names begin with the
   * same substring up to the appearance of the delimiter character. The delimiter may be a single
   * character or a string.
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerListBlobHierarchySegmentResponse>
   */
  listBlobHierarchySegment(delimiter: string, options?: Models.ContainerListBlobHierarchySegmentOptionalParams): Promise<Models.ContainerListBlobHierarchySegmentResponse>;
  /**
   * @param delimiter When the request includes this parameter, the operation returns a BlobPrefix
   * element in the response body that acts as a placeholder for all blobs whose names begin with the
   * same substring up to the appearance of the delimiter character. The delimiter may be a single
   * character or a string.
   * @param callback The callback
   */
  listBlobHierarchySegment(delimiter: string, callback: coreHttp.ServiceCallback<Models.ListBlobsHierarchySegmentResponse>): void;
  /**
   * @param delimiter When the request includes this parameter, the operation returns a BlobPrefix
   * element in the response body that acts as a placeholder for all blobs whose names begin with the
   * same substring up to the appearance of the delimiter character. The delimiter may be a single
   * character or a string.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBlobHierarchySegment(delimiter: string, options: Models.ContainerListBlobHierarchySegmentOptionalParams, callback: coreHttp.ServiceCallback<Models.ListBlobsHierarchySegmentResponse>): void;
  listBlobHierarchySegment(delimiter: string, options?: Models.ContainerListBlobHierarchySegmentOptionalParams | coreHttp.ServiceCallback<Models.ListBlobsHierarchySegmentResponse>, callback?: coreHttp.ServiceCallback<Models.ListBlobsHierarchySegmentResponse>): Promise<Models.ContainerListBlobHierarchySegmentResponse> {
    return this.client.sendOperationRequest(
      {
        delimiter,
        options
      },
      listBlobHierarchySegmentOperationSpec,
      callback) as Promise<Models.ContainerListBlobHierarchySegmentResponse>;
  }

  /**
   * Returns the sku name and account kind
   * @param [options] The optional parameters
   * @returns Promise<Models.ContainerGetAccountInfoResponse>
   */
  getAccountInfo(options?: coreHttp.RequestOptionsBase): Promise<Models.ContainerGetAccountInfoResponse>;
  /**
   * @param callback The callback
   */
  getAccountInfo(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getAccountInfo(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  getAccountInfo(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.ContainerGetAccountInfoResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getAccountInfoOperationSpec,
      callback) as Promise<Models.ContainerGetAccountInfoResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, true);
const createOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2
  ],
  headerParameters: [
    Parameters.metadata,
    Parameters.access,
    Parameters.version,
    Parameters.requestId,
    Parameters.defaultEncryptionScope,
    Parameters.preventEncryptionScopeOverride
  ],
  responses: {
    201: {
      headersMapper: Mappers.ContainerCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerCreateHeaders
    }
  },
  isXML: true,
  serializer
};

const getPropertiesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.leaseId0
  ],
  responses: {
    200: {
      headersMapper: Mappers.ContainerGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerGetPropertiesHeaders
    }
  },
  isXML: true,
  serializer
};

const deleteMethodOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "DELETE",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.leaseId0,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince
  ],
  responses: {
    202: {
      headersMapper: Mappers.ContainerDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerDeleteHeaders
    }
  },
  isXML: true,
  serializer
};

const setMetadataOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp6
  ],
  headerParameters: [
    Parameters.metadata,
    Parameters.version,
    Parameters.requestId,
    Parameters.leaseId0,
    Parameters.ifModifiedSince
  ],
  responses: {
    200: {
      headersMapper: Mappers.ContainerSetMetadataHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerSetMetadataHeaders
    }
  },
  isXML: true,
  serializer
};

const getAccessPolicyOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp7
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.leaseId0
  ],
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "SignedIdentifier",
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignedIdentifier"
            }
          }
        }
      },
      headersMapper: Mappers.ContainerGetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerGetAccessPolicyHeaders
    }
  },
  isXML: true,
  serializer
};

const setAccessPolicyOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp7
  ],
  headerParameters: [
    Parameters.access,
    Parameters.version,
    Parameters.requestId,
    Parameters.leaseId0,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince
  ],
  requestBody: {
    parameterPath: [
      "options",
      "containerAcl"
    ],
    mapper: {
      xmlName: "SignedIdentifiers",
      xmlElementName: "SignedIdentifier",
      serializedName: "containerAcl",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "SignedIdentifier"
          }
        }
      }
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    200: {
      headersMapper: Mappers.ContainerSetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerSetAccessPolicyHeaders
    }
  },
  isXML: true,
  serializer
};

const restoreOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp8
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.deletedContainerName,
    Parameters.deletedContainerVersion
  ],
  responses: {
    201: {
      headersMapper: Mappers.ContainerRestoreHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerRestoreHeaders
    }
  },
  isXML: true,
  serializer
};

const acquireLeaseOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp9,
    Parameters.restype2
  ],
  headerParameters: [
    Parameters.duration,
    Parameters.proposedLeaseId0,
    Parameters.version,
    Parameters.requestId,
    Parameters.action0,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince
  ],
  responses: {
    201: {
      headersMapper: Mappers.ContainerAcquireLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerAcquireLeaseHeaders
    }
  },
  isXML: true,
  serializer
};

const releaseLeaseOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp9,
    Parameters.restype2
  ],
  headerParameters: [
    Parameters.leaseId1,
    Parameters.version,
    Parameters.requestId,
    Parameters.action1,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince
  ],
  responses: {
    200: {
      headersMapper: Mappers.ContainerReleaseLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerReleaseLeaseHeaders
    }
  },
  isXML: true,
  serializer
};

const renewLeaseOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp9,
    Parameters.restype2
  ],
  headerParameters: [
    Parameters.leaseId1,
    Parameters.version,
    Parameters.requestId,
    Parameters.action2,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince
  ],
  responses: {
    200: {
      headersMapper: Mappers.ContainerRenewLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerRenewLeaseHeaders
    }
  },
  isXML: true,
  serializer
};

const breakLeaseOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp9,
    Parameters.restype2
  ],
  headerParameters: [
    Parameters.breakPeriod,
    Parameters.version,
    Parameters.requestId,
    Parameters.action3,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince
  ],
  responses: {
    202: {
      headersMapper: Mappers.ContainerBreakLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerBreakLeaseHeaders
    }
  },
  isXML: true,
  serializer
};

const changeLeaseOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp9,
    Parameters.restype2
  ],
  headerParameters: [
    Parameters.leaseId1,
    Parameters.proposedLeaseId1,
    Parameters.version,
    Parameters.requestId,
    Parameters.action4,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince
  ],
  responses: {
    200: {
      headersMapper: Mappers.ContainerChangeLeaseHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerChangeLeaseHeaders
    }
  },
  isXML: true,
  serializer
};

const listBlobFlatSegmentOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.prefix,
    Parameters.marker0,
    Parameters.maxPageSize,
    Parameters.include1,
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp2
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListBlobsFlatSegmentResponse,
      headersMapper: Mappers.ContainerListBlobFlatSegmentHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerListBlobFlatSegmentHeaders
    }
  },
  isXML: true,
  serializer
};

const listBlobHierarchySegmentOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.prefix,
    Parameters.delimiter,
    Parameters.marker0,
    Parameters.maxPageSize,
    Parameters.include1,
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp2
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListBlobsHierarchySegmentResponse,
      headersMapper: Mappers.ContainerListBlobHierarchySegmentHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerListBlobHierarchySegmentHeaders
    }
  },
  isXML: true,
  serializer
};

const getAccountInfoOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{containerName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.restype1,
    Parameters.comp0
  ],
  headerParameters: [
    Parameters.version
  ],
  responses: {
    200: {
      headersMapper: Mappers.ContainerGetAccountInfoHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.ContainerGetAccountInfoHeaders
    }
  },
  isXML: true,
  serializer
};