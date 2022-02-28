module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5cda251cace195316dc39978d0b4e9dd'),
  },
});
