const http = require('http');
var fs = require('fs');
var path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   var html = fs.readFileSync('index.html');
//   res.end(html);
    var filePath = '.' + request.url;
    var current = __dirname;
    // if(request.url.includes('node_modules') || request.url.includes('src/')){
    //     filePath = '..' + request.url;
    // }
    // else{
    //     filePath = '.' + request.url;
    // }
      
    if (filePath == './'){
        filePath = './index.html';
        //filePath = 'prod/index.html';
    }


    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.html':
            contentType = 'text/html';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;      
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
    }
    
    // var content = fs.readdirSync(filePath);
    // response.writeHead(200, { 'Content-Type': contentType });
    // response.end(content, 'utf-8');

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end(); 
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            //response.setHeader('Content-Type', 'text/html');
            response.end(content, 'utf-8');
        }
    });
});

// server.listen(port, hostname, () => {
//   console.log(`Prod Server running at http://${hostname}:${port}/`);
// });

server.listen(process.env.PORT || 8080);