const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const layout = (content) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Hello world</title>
      <style>
        body {
          font-family: 'Helvetica'
        }
        h1{
          font-size: 3em
        }
      </style>
    </head>
    <body>
      <nav>
        <a href="/">home</a>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </nav>
      ${content}
    </body>
    </html>
    `
}

const root = () => {
  return `
    <h1>Welcome to root</h1>
    <p>This is the root</p>
  `
}

const login = () => {
  return `
    <h1>Login</h1>
    <p>Please login</p>
  `
}

const signup = () => {
  return `
    <h1>Signup</h1>
    <p>Please Signup</p>
  `
}

const server = http.createServer((req, res) => {

  console.log(req.url)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  if(req.url === '/') {
    res.write(layout(root()))
  } else if(req.url === '/login') {
    res.write(layout(login()))
  } else if(req.url === '/signup') {
    res.write(layout(signup()))
  }

  res.end()
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

