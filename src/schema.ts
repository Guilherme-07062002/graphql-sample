import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from "graphql";
import { root } from "./resolvers";

const { getPets, getPet, createPet } = root;

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
    pet: {
      type: PetType,
      args: {
        id: { type: GraphQLString }
      },
      resolve: (parent, args) => getPet(args)
    }
  }
});

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    create: {
      type: PetType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        ownerName: { type: GraphQLString }
      },
      resolve: (parent, args) => createPet(args)
    }
  }
});

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: mutationType
});
