import type { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
  schema: "./graphql.schema.json",
  documents: "./src/**/*.tsx",
};

export default config;
