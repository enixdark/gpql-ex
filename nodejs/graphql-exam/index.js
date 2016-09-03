import { graphql } from 'graphql';
//const { graphql } = require('graphql');  
import readline from 'readline';
import mySchema from './schema/main';
import { db } from './db/db';
const rli = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
}); 

console.log(db);
rli.question('Client request: ', inputQuery => {
  graphql(mySchema, inputQuery, {}, { db }).then( result => {
    console.log('Server Answer :', result.data); 
    db().close(() => rli.close()); 
  });
  //rli.close();
});


