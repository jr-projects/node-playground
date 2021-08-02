const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

// READING VALUES FROM QUERY STRING 
// SAMPLE URL http://localhost:3001/user?id=123&order=abc
app.get('/user', (req, res) => {
    console.log(`Reading data from query string: ID value is ${req.query.id} and Order value is ${req.query.order}`);
    res.status(200).send(`ID value is ${req.query.id} and Order value is ${req.query.order}`);
})
// READING VALUES FROM URL PARAMS
// SAMPLE URL http://localhost:3001/user/123
app.get('/user/:id', (req, res) => {
    console.log(`Reading data from URL params: ID value is ${req.params.id}`);
    res.status(200).send(`ID value is ${req.params.id}`);
})

// READING VALUES FROM REQUEST PARAMS
// SAMPLE URL http://localhost:3001/users

app.use(express.json());

app.get('/users', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});