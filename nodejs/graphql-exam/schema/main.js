
import { 
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const queryType = new GraphQLObjectType({
  name: 'RootQuery',
  fields:{
    hello: {
      type: GraphQLString,
      resolve: () => 'hello'
    } 
  }
});
const mySchema = new GraphQLSchema({
  query: queryType 
});

module.exports = mySchema;
