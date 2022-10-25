const { gql } = require('apollo-server-express');


const typeDefs = gql`


type Book {
      _id: ID!
      authors: [String]
      description: String
      bookId: String
      image: String
      link: String
      title: String
},

type User {
      _id: ID
      username: String!
      email: String!
      bookCount: Int
      savedBooks: [Book]
}
type Query {
      me: User
     },

type Auth {
      token: ID!
      user: User
}

input BookInput {
      authors: [String]
      description: String
      bookId: String
      image: String
      link: String
      title: String
}


     type Mutation {

      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      savedBooks(searchText: String!): User
      removeBook(bookId: String!): User
     }
     
`
module.exports = typeDefs;