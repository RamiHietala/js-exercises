module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9d6790f40f9f8a47e2da95526dde2cfa'),
  },
});
