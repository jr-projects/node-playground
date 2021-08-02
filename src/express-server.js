const express = require('express');

const app = express();
const PORT = 3001;

app.get('/login', (req,res) => {
    console.log('login', req.url);
    res.send('login success!');
})

app.post('/login', (req, res) => {
    res.send('Post - login success!');
})

app.listen(PORT, () => {
    console.log('Express server running on', PORT);
})