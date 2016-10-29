require('babel-core/register');
require('babel-polyfill');

module.exports = {
  default: [
    require('./todo').default,
  ],
};
