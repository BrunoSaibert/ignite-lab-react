import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4u99ybq0pnp01t61eya8cia/master",
  cache: new InMemoryCache(),
});
