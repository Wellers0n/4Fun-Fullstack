import {
  RequestNode,
  Variables,
  Uploadable,
  UploadableMap,
  CacheConfig
} from "relay-runtime";

export const isMutation = (request: RequestNode) => request.operationKind === 'mutation';
export const isQuery = (request: RequestNode) => request.operationKind === 'query';
export const forceFetch = (cacheConfig: CacheConfig) => !!(cacheConfig && cacheConfig.force);

function getRequestBodyWithUploadables(
  request: RequestNode,
  variables: Variables,
  uploadables: UploadableMap
) {
  let formData = new FormData();
  formData.append("query", request.text);
  formData.append("variables", JSON.stringify(variables));

  Object.keys(uploadables).forEach(key => {
    if (Object.prototype.hasOwnProperty.call(uploadables, key)) {
      formData.append(key, uploadables[key]);
    }
  });

  return formData;
}

function getRequestBodyWithoutUplodables(
  request: RequestNode,
  variables: Variables
) {
  return JSON.stringify({
    query: request.text, // GraphQL text from input
    variables
  });
}

export function getRequestBody(
  request: RequestNode,
  variables: Variables,
  uploadables: UploadableMap
) {
  if (uploadables) {
    return getRequestBodyWithUploadables(request, variables, uploadables);
  }

  return getRequestBodyWithoutUplodables(request, variables);
}

export const getHeaders = (uploadables?: UploadableMap) => {
  if (uploadables) {
    return {
      Accept: "*/*"
    };
  }

  return {
    Accept: "application/json",
    "Content-type": "application/json"
  };
};
