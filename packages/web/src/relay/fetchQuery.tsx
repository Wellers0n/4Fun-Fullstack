import { RequestNode, Variables, UploadableMap, CacheConfig } from "relay-runtime";
import {
  getRequestBody,
  getHeaders
} from "./helpers";
export const TOKEN_KEY = "token";

export function getToken() {
  // get token from cookie or session token instead
  return localStorage.getItem(TOKEN_KEY);
}

const config = {
  GRAPHQL_URL: "http://localhost:5000/graphql"
};

const fetchQuery = async (
  request: RequestNode,
  variables: Variables,
  cacheConfig: CacheConfig,
  uploadables?: UploadableMap
) => {
  const body = getRequestBody(request, variables, uploadables);
  const headers = {
    ...getHeaders(uploadables),
    Authorization: getToken()
  };

  const response = await fetch(config.GRAPHQL_URL, {
    method: "POST",
    headers,
    body
  });

  return await response.json();
};

export default fetchQuery;
