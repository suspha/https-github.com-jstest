exports.myDateTime = function () {
    return Date();
};

const http = require('http');
const dt = require('./myfirstmodule');

http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("The date and time are currently: " + dt.myDateTime());
}).listen(3001);
