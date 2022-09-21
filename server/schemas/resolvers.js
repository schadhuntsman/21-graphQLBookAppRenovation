// import the gql tagged template function
const { gql } = require('apollo-server-express');

const resolvers = {
      Query: {
            books: async () => {
                  return Books.find().sort({ createdAt: -1 });
            }
      }
};