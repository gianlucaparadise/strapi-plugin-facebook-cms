import { getPluginConfigRoles } from "../helpers/pluginConfig";

export default {
  checkConfigRoles(policyContext, _, { strapi }) {
    const configRoles = getPluginConfigRoles(strapi);
    if (!configRoles || configRoles.length <= 0) {
      return true;
    }

    const userRoles: any[] = policyContext.state.user.roles;
    const hasRole = userRoles.find((r) => configRoles.includes(r.code));
    if (hasRole) {
      return true;
    }

    return false;
  },
};
