npm install pug-plugin --save-dev // установка плагина для pug
// webpack.config.js
const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'public/'),
    publicPath: '/', // must be defined any path, `auto` is not supported yet
  },
  entry: {
    index: './src/index.pug', // the `pug-plugin` extract HTML from entry file
  },
  plugins: [
    new PugPlugin(), // add it to handle pug files in entry
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader, // the pug-plugin already contain this pug-loader
        options: {
          method: 'render', // the fastest method to generate HTML files
        }
      },
    ],
  },
};