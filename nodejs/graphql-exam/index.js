import { graphql } from 'graphql';
//const { graphql } = require('graphql');  
import readline from 'readline';
import mySchema from './schema/main';
import { db } from './db/db';
import express from 'express';
import graphqlHTTP from 'express-graphql';
// const rli = readline.createInterface({ 
//   input: process.stdin, 
//   output: process.stdout 
// }); 

const app = express();

app.use('/graph', graphqlHTTP({
  schema: mySchema,
  context: { db },
  graphiql: true 
}));

app.listen(3000, () => {
   console.log('Running Express.js on port 3000');
});
console.log(db);
// rli.question('Client request: ', inputQuery => {
//   graphql(mySchema, inputQuery, {}, { db }).then( result => {
//     console.log('Server Answer :', result.data); 
//     db().close(() => rli.close()); 
//   });
// });


