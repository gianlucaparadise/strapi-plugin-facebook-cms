import { Strapi } from "@strapi/strapi";

import { GetConfigResponse } from "../../types";
import { buildConfig } from "./utils";

export default ({ strapi }: { strapi: Strapi }) => ({
  getConfig(): GetConfigResponse {
    return {
      data: buildConfig(strapi, true),
    };
  },
});
