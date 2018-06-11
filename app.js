const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3001;

const layout = (body) => {
  let file = html('layout')
  return file.toString().replace('${content}', body)
}

const html = (name) => {
  let file = fs.readFileSync(`./app/html/${name}.html`)
  return file
}

const css = (name) => {
  let file = fs.readFileSync(`./app/css/${name}.css`)
  return file
}


const server = http.createServer((req, res) => {

  console.log(req.url)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  if(req.url === '/') {
    res.write(layout(html('root')))

  } else if(req.url === '/login') {
    res.write(layout(html('login')))

  } else if(req.url === '/signup') {
    res.write(layout(html('signup')))

  } else if(req.url === '/about') {
    res.write(layout(html('about')))

  } else if(req.url === '/css/app.css') {
    res.setHeader('Content-Type', 'text/css')
    res.write(css('app'))
  }

  res.end()

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
