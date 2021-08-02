const express = require('express');
const path = require('path');

// WITH DEFAULT ENV PATH
// const dotenv = require('dotenv').config();

// WITH CUSTOM ENV PATH
console.log(process.env.ENV);
const ENV = process.env.ENV;
const dotenv = require('dotenv').config({path: `./dotenv/${ENV}.env`});

const app = express();

const PORT = process.env.PORT || 3001;

// SAMPLE COMMAND PORT=3002 node src/env.js

app.get('/', (req, res) => {
    res.status(200).send('<h1>Dashboard</h1>');
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});