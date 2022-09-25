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

type Auth {
      token: ID!
      user: User
}

type Query {
      me: User
      users: [User]
      user(username: String!): User
      savedBooks(username: String): [User]
      books(username: String):[Book]
      book(_id: bookId!): Book
     },

     type Mutation {
      login(email: String!, password: Sring!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      addBook(searchText: String!): Book
      # removeBook(bookId: String!): Book
     }
     
`
module.exports = typeDefs;