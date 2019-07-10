import { AsyncStorage, Alert } from "react-native";
import { RequestNode, Variables, UploadableMap, CacheConfig } from "relay-runtime";
import {
  getRequestBody,
  getHeaders
} from "./helpers";

export const TOKEN_KEY = "token";

const _retrieveData = async () => {
  try {
    const value = await  AsyncStorage.getItem(TOKEN_KEY);
    if (value !== null) {
      // We have data!!
      return  value;
    }
  } catch (error) {
    // Error retrieving data
    Alert.alert(error);
  }
};


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
    Authorization: await _retrieveData()
  };

  const response = await fetch(config.GRAPHQL_URL, {
    method: "POST",
    headers,
    body
  });

  return await response.json();
};

export default fetchQuery;
