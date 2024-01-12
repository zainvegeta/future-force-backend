export default {
  routes: [
    {
      method: "GET",
      path: "/recaptcha/validateToken",
      handler: "recaptcha.validateToken",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
