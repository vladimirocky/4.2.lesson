// pug template
    doctype html
    html(lang='en')
    head
      title Hello, World!
    body
      h1 Hello, World!
      div.remark
        p Pug rocks!

// html - template
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Hello, World!</title>
      </head>
      <body>
        <h1>Hello, World!</h1>
        <div class="remark">
          <p>Pug rocks!!</p>
        </div>
      </body>
    </html>

// pug
    nav
      navbar-default  div
        h1 My Website!
      ul
        li
          a Home
        li
          a Page 1
        li
          a Page 2
      input


// html
    <nav>
      <div>
        <h1>My Website!</h1>
      </div>
      <ul>
        <li><a>Home</a></li>
        <li><a>Page 1</a></li>
        <li><a>Page 2</a></li>
      </ul>
      <input/>
    </nav>

//pug
    nav#navbar-default  
      .container-fluid
        h1.navbar-header My Website!


//html
    <nav id="navbar-default">
      <div class="container-fluid">
        <h1 class="navbar-header">My Website!</h1>
      </div>
    </nav>

npm i -g pug-cli // глобальная установка pug-cli

pug -w . -o ./html -P // слежка и компиляция файла из pug в html
    -w - watch
    -o ./html - output, реьд файлы будут в папке html
    -P prettifies "причесать" html на выходе