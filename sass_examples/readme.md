# Примеры занятия SASS
      Существует 5 CSS препроцессоров: Sass, SCSS, Less, Stylus и PostCSS.
      SASS (.sass) Syntactically Awesome Style Sheets.
      SCSS (.scss) Sassy Cascading Style Sheets.
## Где читать про SASS
- [Расширения Sass | Оригинальная документация](https://sass-lang.com/documentation)
- [Расширения Sass | Документация на русском](https://sass-scss.ru/documentation/rasshirenie_css/)
## Примеры
    Тут лежит три файла примеров
1. *scss_ex1.scss* - вложенность
2. *scss_ex2.scss* - директива & для вставки родительского селектора
3. *scss_ex2.scss* - миксины и арифметические операции
## Шпаргалка
### Сборка проекта с Sass с использованием webpack
    Используем пакетный менеджер npm
1. Установка зависимостей
   - *npm install*
2. Установка лоадера в проект
   - *npm install sass-loader*
   - *sass webpack --save-dev*
3. Сборка пакета с вебпаком
   - *npm run build*

### Чтобы просто получить css файл используйте утилиту sass
    Установка sass
   - *npm install -g sass*

    Создание файла css из scss
   - *sass <from_filename.scss> <to_filename.css>*
   - например: *sass scss_ex1.scss scss_ex1.css*