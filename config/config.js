const config = {
  development: {
    PORT: process.env.PORT || 5000,
    PRIVATE_KEY: process.env.PRIVATE_KEY || 'somePrivateKey',
    DB_URI:
      process.env.DB_URI ||
      'mongodb+srv://tandy:usertandy@cluster0.yoxyh.mongodb.net/cubics?retryWrites=true&w=majority'
  },
  production: {
    PORT: 80
  }
};

module.exports = config[process.env.NODE_ENV];
