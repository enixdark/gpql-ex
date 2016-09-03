import { graphql } from 'graphql';
//const { graphql } = require('graphql');  
import readline from 'readline';
import mySchema from './schema/main';

const rli = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout 
}); 

rli.question('Client request: ', inputQuery => {
  graphql(mySchema, inputQuery).then( result => {
    console.log(`Server Answer: $result.data`); 
  });
  rli.close();
});


