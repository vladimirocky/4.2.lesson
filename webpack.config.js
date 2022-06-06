const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
   mode = 'production'
}

console.log('mode:' + mode);

module.exports = {
   mode: mode,
   entry: {
      // index.js будет собираться в файл scripts.js, в папке dist
      scripts: './src/index.js',
   },
   output: {
      filename: '[name].[contenthash].js',
      assetModuleFilename: 'asset/[hash][ext][query]',
      clean: true,
   },
   // отображение файлов, в которых находятся стили при проверке html объекта в браузере
   devtool: 'source-map',
   // собирает все библиотеки в отдельный файл
   optimization: {
      splitChunks: {
         chunks: 'all',
      }
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: '[name].[contenthash].css'
      }),
      new HtmlWebpackPlugin({
         template: "./src/index.pug"
      })
   ],
   module: {
      rules: [
         // для поиска фото в html файлах
         {
            test: /\.html$/i,
            loader: 'html-loader'
         },
         {
            test: /\.(sa|sc|c)ss/,
            use: [
               //при сборке в продакшн режиме файлы добавляются в dist, в девелопмент режиме добавляются в head index.html файла
               (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
               "css-loader",
               {
                  loader: "postcss-loader",
                  options: {
                     postcssOptions: {
                        plugins: [
                           [
                              "postcss-preset-env"
                           ]
                        ]
                     }
                  }
               },
               "sass-loader"
            ]
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource'
         },
         {
            test: /\.pug$/,
            loader: 'pug-loader',
            exclude: /(node_modules|bower_components)/,
         },
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
      ]
   }
}