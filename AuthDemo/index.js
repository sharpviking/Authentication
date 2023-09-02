const express = require('express');
const User = require('./models/user');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/register', (req, res) => {
    res.render('register');
})

app.get('/secret', (req, res) => {
    res.send('This is secret! You cannot see ME unless you are Logged In!')
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
});