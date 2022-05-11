// Настройка webpack
npm init -y /// инициализируем проект - создается package.json

npm install -D webpack webpack-cli //Устанавливаем webpack и webpack-cli в качестве зависимостей для разработки

// webpack.config.js
const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),// ./src - путь к js файлу точки входа
    },
    // точка выхода - куда скомпилированые файлы складываются 
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
  },
}
// package.json - добавляем скрипт билд для компиляции проекта
"scripts": {
  "build": "webpack"
}