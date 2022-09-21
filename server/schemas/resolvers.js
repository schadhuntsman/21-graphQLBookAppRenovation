// import the gql tagged template function
const { Book, User } = require('../models');
const { gql } = require('apollo-server-express');

const resolvers = {
      Query: {
            books: async () => {
                  return Book.find().sort({ createdAt: -1 });
            }
      }
};

module.exports = resolvers;