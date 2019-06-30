import { RequestNode, Variables } from "relay-runtime";
import { AsyncStorage, Alert } from "react-native";

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

const fetchQuery = async (request: RequestNode, variables: Variables) => {
  const body = JSON.stringify({
    query: request.text,
    variables
  });

  const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
    Authorization:  await _retrieveData()
  };

  const response = await fetch(config.GRAPHQL_URL, {
    method: "POST",
    headers,
    body
  });

  return await response.json();
};

export default fetchQuery;
