const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const mat = require('./examples/mat');
const op = require('./examples/operacaoArray');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
 
  var msg = "Itens iniciais:";
  
  items = [10, 20, 30, 40, 50];

  items = op.operacaoArray(items, mat.sub, 5);

  for (let index = 0; index < items.length; index++) {
    msg = msg + ' ' + items[index]
  }

  op.operacaoArray(items, mat.sub, 10);

  res.end(msg);



});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});