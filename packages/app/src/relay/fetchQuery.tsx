import { RequestNode } from 'relay-runtime';
import { AsyncStorage } from 'react-native';
import { Variables } from 'react-relay';

export const TOKEN_KEY = 'token';

export function getToken() {
  // get token from cookie or session token instead
  return AsyncStorage.getItem(TOKEN_KEY);
}

const config = {
    GRAPHQL_URL: 'http://localhost:5000/graphql',
};
  
const fetchQuery = async (request: RequestNode, variables: Variables) => {
    const body = JSON.stringify({
        query: request.text,
        variables,
    })

    const headers: object = {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: getToken()
    }

    const response = await fetch(config.GRAPHQL_URL, {
        method: 'POST',
        headers,
        body
    })

    return await response.json()
}

export default fetchQuery