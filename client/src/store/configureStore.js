let configureStore;

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  configureStore = require('./configureStore.dev').default;
  module.exports = configureStore;
}
