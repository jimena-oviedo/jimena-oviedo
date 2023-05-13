import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.VITE_GRAPHQL_URL as string]: {
        headers: {
          Authorization: `Bearer ${process.env.VITE_AUTHORIZATION_TOKEN}`,
        },
      },
    },
  ],
  documents: "src/**/*.tsx",
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      config: {
        avoidOptionals: true,
      },
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
