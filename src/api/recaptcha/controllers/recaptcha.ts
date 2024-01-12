/**
 * A set of functions called "actions" for `recaptcha`
 */
const axios = require('axios');
export default {
  validateToken: async (ctx, next) => {
    const  token = ctx.request.query['token'];
    const secretKey = "6LdOqk0pAAAAAMpScHNzPJd3ZzyQ6v9owKd_nWdN";
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    const { data } = await axios.get(url);
    ctx.body = data;
  },
};
