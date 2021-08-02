const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));


app.get('/dashboard', (req, res) => {
    res.status(200).send('<h1>Dashboard</h1>');
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});