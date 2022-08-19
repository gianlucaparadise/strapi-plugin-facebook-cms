import pluginId from "../helpers/pluginId";

export default [
  {
    method: "GET",
    path: "/config",
    handler: "config.getConfig",
    config: {
      policies: [`plugin::${pluginId}.checkConfigRoles`],
    },
  },
];
