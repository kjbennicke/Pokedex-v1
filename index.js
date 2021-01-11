// Initial express setup
const express = require('express');
const app = express();
const colors = require('colors');
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');

//ROUTES
app.get('/', (req, res) => {
  res.render('home');
});
app.get('*', (req, res) => {
  console.error('This is not a valid route.');
  res.render('error');
});

//Server port
app.listen(3000, () => {
  console.log('Pokedex Booted!'.cyan.underline);
});
