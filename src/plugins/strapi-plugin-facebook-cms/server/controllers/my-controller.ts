import '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-plugin-facebook-cms')
      .service('myService')
      .getWelcomeMessage();
  },
});
