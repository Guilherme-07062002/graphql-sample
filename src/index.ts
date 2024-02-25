import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  const response = JSON.stringify({
    message: 'Hello World'
  });
  res.send(response);
});

server.listen(3000, () => {
  console.log('\nlistening on 3000');
});