const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const PORT = process.env.PORT || 3001;
const publicDirectoryPath = path.join(__dirname, '../public');

// step 2 : we can customize the view path
const viewPath = path.join(__dirname, '../templates/views');

// step 3: we can create reusable view/partials
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs');

// step 2
app.set('views', viewPath);

// step 3
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get(['/home', '/'], (req, res) => {
    res.render('index', {
        title: 'Home screen',
        name: 'Rajasekaran'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About screen',
        name: 'Jai'
    })
})

app.get('/dashboard', (req, res) => {
    res.status(200).send('<h1>Dashboard</h1>');
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});