module.exports = ({ env }) => ({
  host: env('HOST', '106.75.222.146'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'af584ee9ba63de65ca1b0a843ffeaf26'),
    },
  },
});
