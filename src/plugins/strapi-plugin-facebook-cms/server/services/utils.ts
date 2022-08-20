import type { Strapi } from "@strapi/strapi";

import type { Config } from "../../types";
import { getPluginConfigApiKey } from "../helpers/pluginConfig";

export const buildConfig = (
  strapi: Strapi,
  hideSensitiveInfo = false
): Config => {
  const apiKey = getPluginConfigApiKey(strapi);

  return {
    apiKey: hideSensitiveInfo ? undefined : apiKey,
    apiKeyPartial: apiKey?.substring(0, 6),
  };
};
