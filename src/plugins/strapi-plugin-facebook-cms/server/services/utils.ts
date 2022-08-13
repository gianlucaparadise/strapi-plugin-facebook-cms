import { Strapi } from "@strapi/strapi";

import { getPluginConfigApiKey } from "../helpers/pluginConfig";

export const buildConfig = (strapi: Strapi, hideSensitiveInfo = false) => {
  const apiKey = getPluginConfigApiKey(strapi);

  return {
    apiKey: hideSensitiveInfo ? undefined : apiKey,
    apiKeyPartial: apiKey?.substring(0, 6),
  };
};
