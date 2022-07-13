const path = require('path');
const PugPlugin = require('pug-plugin');
const miniCss = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: { 
    index: './src/index.js',
    app: './index.pug',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new PugPlugin(),
    new miniCss({
      filename: 'style.css',
   }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
         
          { loader: 'style-loader' },
          
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ]
      },
      {
        test:/\.(s*)css$/,
        use: [
           miniCss.loader,
           'css-loader',
           'sass-loader',
        ]
     },
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
        options: {
          method: 'render',
        }
      },
    ]
  }
};