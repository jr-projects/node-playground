const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));
const viewPath = path.join(__dirname, '../templates/views');

app.set('view engine', 'hbs');

app.set('views', viewPath);


app.get('/', (req, res) => {
    res.status(200).send('<h1>Home</h1>');
})

app.get('/user', (req, res) => {
    res.status(200).send('<h1>User</h1>');
})

app.get('*', (req, res) => {
    res.render('404');
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});