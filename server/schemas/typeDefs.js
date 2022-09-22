// import the gql tagged template function
const { gql } = require('apollo-server-express');
// const { Book, User } = require('../models');
// const { bookSchema } = require('../models/Book')
// const { bookSchema } = {Book}

const typeDefs = gql`




type User {
      _id: ID
      username: String
      email: String
      savedBooks: [Book]
      bookCount: [Book]
}

type Book {
      _id: ID
      authors: String
      description: String
      bookId: String
      image: String
      link: String
      title: String
},

type Query {
      users: [User]
      user(username: String!): User
      savedBooks(username: String): [User]
      books(username: String):[Book]
      book(_id: bookId!): Book
     }
`
module.exports = typeDefs;