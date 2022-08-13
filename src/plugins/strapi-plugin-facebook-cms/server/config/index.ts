export default {
  default: {},
  validator(config) {
    if (config.apiKey && typeof config.apiKey !== "string") {
      throw new Error("Config property `apiKey` has to be a string");
    }
  },
};
