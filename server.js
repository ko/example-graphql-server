import express from 'express';
import graphqlHTTP from 'express-graphql';
import fs from 'fs';

import { buildSchema } from 'graphql';
import rootValue from './resolvers';

const schemaFromFile = () => {
  const file = './schema.gql';
  const encoding = 'utf8';
  const contents = fs.readFileSync(file, encoding);

  return buildSchema(contents);
};

const app = express();
const PORT = 5000;

app.use('/graphql', graphqlHTTP(req => {
  return {
    schema: schemaFromFile(),
    rootValue,
    graphiql: true,
  };
}));

let server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Listening on ${host}:${port}`);
});
