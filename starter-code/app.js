
// To require Express
const express = require('express');

const app = express ();

// To connect the views and public folders
app.set('view engine', 'ejs');

app.use(express.static('public'));


// ----------------------------------------------

// come back and change in btwn the ''
app.get('/', (request, response, next) => {


  response.render('home.ejs');


});

// come back and change in btwn the ''
// ----------------------------------------------
app.get('/gallery', (request, response, next) => {


  response.render('gallery.ejs');


});

// come back and change in btwn the ''
// ----------------------------------------------
app.get('/about', (request, response, next) => {


  response.render('about.ejs');


});

app.listen(3000);
