import { PropsWithChildren, useMemo } from "react";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export function ClientContextProvider({ children }: PropsWithChildren) {
  const client = useMemo(() => {
    return new ApolloClient({
      uri: import.meta.env.VITE_GRAPHQL_URL,
      cache: new InMemoryCache(),
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION_TOKEN}`,
      },
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
