const express = require('express');
const User = require('./models/user');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://sharpviking:l9a53607@cluster0.0maezhz.mongodb.net/test",
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    res.send(req.body);
})


app.get('/secret', (req, res) => {
    res.send('This is secret! You cannot see ME unless you are Logged In!')
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
});