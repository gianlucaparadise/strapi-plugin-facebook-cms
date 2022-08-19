export default {
  default: {},
  validator(config) {
    if (config.apiKey && typeof config.apiKey !== "string") {
      throw new Error("Config property `apiKey` has to be a string");
    }
    if (config.roles && !Array.isArray(config.roles)) {
      throw new Error("Config property `roles` has to be an array of strings");
    }
  },
};
