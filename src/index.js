const {ApolloServer, gql} = require('apollo-server');
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client')
const newNote = require('./resolvers/newNote.js');
const getNote = require('./resolvers/getNote.js');

const prisma = new PrismaClient()

const resolvers = {
  Query: getNote,
  Mutation: newNote
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
      path.join(__dirname, 'schema.graphql'),
      'utf8'
    ), 
    resolvers,
    context: {
      prisma,
    }
});

server.listen();