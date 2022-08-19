export default {
  "facebook-cms": {
    enabled: true,
    resolve: "src/plugins/strapi-plugin-facebook-cms",
    config: {
      apiKey: "a-very-long-api-key-value",
      roles: ["strapi-super-admin"],
    },
  },
};
