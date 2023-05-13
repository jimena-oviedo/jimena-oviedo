import { PropsWithChildren, useMemo } from "react";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export function ClientContextProvider({ children }: PropsWithChildren) {
  const url = import.meta.env.VITE_GRAPHQL_URL;
  const token = import.meta.env.VITE_AUTHORIZATION_TOKEN;

  const client = useMemo(() => {
    if (!token) throw "Missing public API token.";
    if (!url) throw "Missing API URL.";
    return new ApolloClient({
      uri: url,
      cache: new InMemoryCache(),
      headers: { Authorization: `Bearer ${token}` },
    });
  }, [token, url]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
