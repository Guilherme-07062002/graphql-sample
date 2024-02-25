import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from "graphql";
import { root } from "./resolvers";

const { getPets } = root;

const PetType = new GraphQLObjectType({
  name: "pet",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    ownerName: { type: GraphQLString }
  })
});

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    pets: {
      type: new GraphQLList(PetType),
      resolve: () => getPets()
    },
  }
});

export const schema = new GraphQLSchema({
  query: QueryType,
});
