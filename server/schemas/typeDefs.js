// import the gql tagged template function
const { gql } = require('apollo-server-express');
// const { Book, User } = require('../models');
// const { bookSchema } = require('../models/Book')
// const { bookSchema } = {Book}

// type Query {

//       books(authors: String): [Book]
      
//     }
const typeDefs = gql`
type User {
      _id: ID
      username: String
      email: String
      savedBooks: [User]
      bookCount: [User]
}

type Book {
      _id: ID
      authors: String
      description: String
      bookId: String
      image: String
      link: String
      title: Strring
}
`
module.exports = typeDefs;