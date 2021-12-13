const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

    // response.end("It's working!")

    
    if (request.url === '/json') {
        response.setHeader('Content-Type', 'application/json');
        response.write(`{'type': 'rocket', 'model': 'energija'}`);        
     } else
     if (request.url === '/index') {
         response.setHeader('Content-type', 'text/html');
         const html = fs.readFileSync('./index.html');
         response.write(html);         
     } else
     if (request.url === '/about') {
         const html = fs.readFileSync('./about.html');
         response.write(html);         
     } else
     if (request.url === '/services') {
         const html = fs.readFileSync('./services.html');
         response.write(html);         
     } else
     if (request.url === '/post' || request.method === 'POST')  {
        response.write(`post method processed`);            
     } else
     if (request.url === '/put' || request.method === 'PUT')  {
        response.write(`put method processed`);            
     } else
     if (request.url === '/patch' || request.method === 'PATCH')  {
        response.write(`patch method processed`);            
     } else
     if (request.url === '/delete' || request.method === 'DELETE')  {
        response.write(`delete method processed`);            
     }     
     else {
         response.statusCode = 404;
     } return response.end();
   
}).listen(3000, function(){
    console.log("Приветствуем вас на борту нашего сервера! Мы начали работу с порта 3000!");
});

