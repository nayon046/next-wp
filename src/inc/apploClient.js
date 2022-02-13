import {
    ApolloClient,
    InMemoryCache
  } from "@apollo/client";

  export const client = new ApolloClient({
    uri: 'https://accounting5.thetaxq.com/wordpress/graphql',
    cache: new InMemoryCache()
  });