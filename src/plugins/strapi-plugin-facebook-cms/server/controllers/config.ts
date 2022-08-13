import { Strapi } from "@strapi/strapi";
import pluginId from "../helpers/pluginId";

export default ({ strapi }: { strapi: Strapi }) => ({
  getConfig(ctx) {
    ctx.body = strapi.plugin(pluginId).service("config").getConfig();
  },
});
