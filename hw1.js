console.log("Спасибо, Юра, космос наш!");
const http = require("http");
http.createServer(function(request,response){
     
    response.end("Hello NodeJS student!");
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Приветствуем вас на борту нашего сервера! Мы начали работу с порта 3000!");
});