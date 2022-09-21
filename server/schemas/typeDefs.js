// import the gql tagged template function
const { gql } = require('apollo-server-express');

type Query {
      books: [Book]
      
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