const express = require('express')
const hbs = require('hbs');

const app = express()
const port = 8080

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

//* Ruta principal
app.use( express.static('public'))

app.get('/', function (req, res) {

  res.render('home', {
    titulo: 'Game Page',
    head: 'GAMEPAGE'
  })

})

//* Subrutas
app.get('/about', function (req, res) {

  res.render('about', {
    title: 'About Us',
    
  })

})

app.get('/contact-me', function (req, res) {

  res.render('login')

})

//*Ruta redireccional
app.get('*', function (req, res) {

    res.sendFile(__dirname + '/public/404.html')

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})