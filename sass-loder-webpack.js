npm install sass-loader sass webpack --save-dev // установка лоадера в проект

module.exports = {
  module: {
    rules: [
      //scss-sass loader
      {
        test: /\.s[ac]ss$/i, // проверка расширения файлов (sass,scss)
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      // css loader
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
