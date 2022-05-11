Существует 5 CSS препроцессоров: Sass, SCSS, Less, Stylus и PostCSS.

SASS (.sass) Syntactically Awesome Style Sheets.
SCSS (.scss) Sassy Cascading Style Sheets.

// CSS - вложенность

#A {
  color: red
}
#A #B {
  color: green
}

#A #B #C p {
  color: blue
}

//SCSS

#A {
  color: red
  #B{
    color: green
    #C p {
      color: blue
    }
  }
}


//SCSS - оператор &

#P {
  color:black
  a {
    font-weight: bold;
    &:hover {
      color: red
    }
  }
}

// CSS 
#P { 
  color: black 
}
#P a {
  font-weight: bold;
}
#P a:hover{
  color:red 
}

// SCSS mixins

@mixin flexible(){
  display: flex;
  justify-content: center;
  align-items: center;
}

.centered-elements {
  @include flexible();
  border: 1px solid gray;
}

//SCSS арифметические операции

p{
  font-size: 10px + 6px
  font-size: $size * 2
  font-size: $size / 2
  font-size: $size - 2px
}