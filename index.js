// Initial express setup
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

//ROUTES
app.get('/', (req, res)=>{
    res.render('home');
});
app.get('*', (req, res)=>{
    console.error('This is not a valid route.');
    res.render('error');
});

//Server port
app.listen(3000, ()=>{
    console.log("Pokedex Booted!")
});