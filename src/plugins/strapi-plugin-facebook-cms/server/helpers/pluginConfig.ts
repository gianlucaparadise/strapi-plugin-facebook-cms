import { Strapi } from "@strapi/strapi";

import pluginId from "./pluginId";

type ConfigGetter<T> = (key: string) => T | undefined;

const getPluginConfig = <T>(strapi: Strapi): ConfigGetter<T> => {
  return strapi.plugin(pluginId).config;
};

export const getPluginConfigApiKey = (strapi: Strapi): string | undefined => {
  const pluginConfig = getPluginConfig<string>(strapi);
  return pluginConfig("apiKey");
};

export const getPluginConfigRoles = (strapi: Strapi): string[] | undefined => {
  const pluginConfig = getPluginConfig<string[]>(strapi);
  return pluginConfig("roles");
};
