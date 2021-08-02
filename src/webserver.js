const fs = require('fs');
const http = require('http');
const PORT = 3001;

const webServer = http.createServer((req, res)=>{
    //console.log('server request', req.url, req.method);
    const target = req.url;
    switch(target) {
        case '/':
            res.end('Home');
        break;
        case '/login': 
            res.end('Login');
        break;
        default:
            res.end('404')
            break;
    }
    
});

webServer.listen(PORT, ()=>{
    console.log('Server running on', PORT);
});