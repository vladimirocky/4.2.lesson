const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '/'),
    publicPath: '/',
  },
  entry: {
    // `pug-plugin` создаст HTML в качестве точки входа
    index: './ex3.pug',
  },
  plugins: [
    // необходимо добавить для обработки входного pug файла
    new PugPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
        options: {
          method: 'render',
        }
      },
    ],
  },
};