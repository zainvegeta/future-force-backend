export default [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:4200', 'http://localhost:1337',
      'https://13-232-158-223.nip.io','https://dqt20olwvqdpd.cloudfront.net'],
      headers: '*'
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
