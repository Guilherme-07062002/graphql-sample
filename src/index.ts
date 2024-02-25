import express from 'express';
import http from 'http';

import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  const response = JSON.stringify({
    message: 'Hello World'
  });
  res.send(response);
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

server.listen(3000, () => {
  console.log('\nlistening on 3000');
});