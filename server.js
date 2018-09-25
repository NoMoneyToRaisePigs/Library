const http = require('http');
var fs = require('fs');
var path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    if(request.method === 'POST' && request.url == "/downloadresume"){
        handler.downloadHandler(request, response);
    }
    else if (request.method === 'GET') {
        handler.staticFileHandler(request, response);
    }
});

var handler = {
    staticFileHandler: function handleStaticFile(request, response){
        var filePath = '.' + request.url;
        if (filePath == './')
            filePath = './src/index.html';
    
        var extname = path.extname(filePath);
        var contentType = 'text/html';
    
        if(extname == '.jpg' || extname == '.svg' ||  extname == '.png'){
            let segments = request.url.split('/');
            let resourceName = segments[segments.length - 1];
            filePath = path.join("./","resource",resourceName);
        }
        
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
            case '.svg':
                contentType = 'image/svg+xml';
                break;
            case '.ico':
                contentType = 'image/x-icon';
                break;
        }
        
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
                response.end(content, 'utf-8');
            }
        });
    },
    downloadHandler: function handleDownLoad(request, response){
        let filePath = path.join("./","resource","resume.pdf");
        
        fs.readFile(filePath, function(error, content) {
            if (error) {       
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end();              
            }
            else {
                // response.setHeader('Content-disposition', 'attachment; filename='+ 'myfile.pdf');
                // response.end(content, 'application/pdf');
                //var buffer = Buffer.from(content);
                //var buffer = Blob.from(content);
                response.end(content,'application/octet-stream');
            }
        });
    }
};

server.listen(port, hostname, () => {
  console.log(`Dev Server running at http://${hostname}:${port}/`);
});