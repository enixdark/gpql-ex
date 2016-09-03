import { 
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';
const roll = () => Math.floor(6 * Math.random()) + 1;
import { db } from '../db/db';
const queryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields:{
    hello: {
      type: GraphQLString,
      resolve: () => 'hello'
    },
    diceRoll: {
      type: new GraphQLList(GraphQLInt),
      args: {
        count: { type: GraphQLInt }      
      },
      resolve: (_, args) => { 
         let rolls = [];
         for(let i = 0; i < args.count ; i++){
           rolls.push(roll());         
         }
         return rolls;
      }
    },
    usersCount: {
      type: GraphQLInt,
      resolve: (_, args, { db }) => {
        return db().collection('users').count()
        .then(usersCount => usersCount);
      }
    }
  }
});

const mySchema = new GraphQLSchema({
  query: queryType 
});

module.exports = mySchema;
