export type GetConfigResponse = {
  data: Omit<Config, "apiKey">;
};

export type Config = {
  apiKey?: string;
  apiKeyPartial?: string;
};
