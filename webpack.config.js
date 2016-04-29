var path = require('path');
var getConfig = require('hjs-webpack');
var webpack = require('webpack');

var config = getConfig({
  // entry point for the app
  in: 'app/main.js',
  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'dist',
  devServer: {
    port: 54230
  },
  // This will destroy and re-create your
  // `out` folder before building so you always
  // get a fresh folder. Usually you want this
  // but since it's destructive we make it
  // false by default
  clearBeforeBuild: true
});

// config.plugins.push(
//   new webpack.EnvironmentPlugin([
//     'NODE_ENV', 'API_URL', 'GOOGLE_CLIENT_ID'
//   ])
// );

config.resolve.root = path.resolve('.');

module.exports = config;
