module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e79ccb78a0a75d715710bc95c8ff8e16'),
  },
});
