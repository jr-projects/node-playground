const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;


const middleware = (req, res, next) => {
    console.log('Inside Middleware - ', req.method, req.path);
    next();
    //next is called to signal to Express that the middleware function is done
}

//app.use(middleware);

app.get('/', middleware, (req, res) => {
    res.status(200).send('<h1>Dashboard</h1>');
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});