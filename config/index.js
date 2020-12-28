const NODE_ENV = process.env.NODE_ENV || 'staging';

const config = {
  staging: {
    MONGO_URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@madea.j9vdi.mongodb.net/staging?retryWrites=true&w=majority`,
  },
  production: {
    MONGO_URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@madea.j9vdi.mongodb.net/production?retryWrites=true&w=majority`,
  },
};
// eslint-disable-next-line no-console
console.log('NODE_ENV:', NODE_ENV);
module.exports = config[NODE_ENV];
