const path = {
  development: '.env.dev',
  production: '.env',
};

module.exports =
  process.env.NODE_ENV && path[process.env.NODE_ENV]
    ? require('dotenv').config({ path: path[process.env.NODE_ENV] })
    : require('dotenv').config({ path: path.development });
