const http = require('http');
const fs = require('fs');
const { url } = require('inspector');
const hostname = "127.0.0.1";
const port = "3000"
const home = fs.readFileSync('index.html');
const contact = fs.readFileSync('./contact.html');
const help = fs.readFileSync('./help.html');
const about = fs.readFileSync('./about.html');
const server = http.createServer((req,res) => {
    console.log(req.url)
    URL = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/html');
    switch (URL) {
      case "/":
        res.end(home);
        break;
      case "/contact":
        res.end(contact);
        break;
      case "/about":
        res.end(about);
        break;
      case "/help":
        res.end(help);
        break;
      default:
        res.end("<h1> 404 page not found </h1>")
    }
    
})
server.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`)
})