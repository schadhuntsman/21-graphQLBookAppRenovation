// import the gql tagged template function
const { Book, User } = require('../models');
const { gql } = require('apollo-server-express');

const resolvers = {
      Query: {
            books: async () => {
                  return Book.find().sort({ createdAt: -1 });
            }
      },
      books: async (parent, {_id }) => {
            return Book.findOne({_id });
      },
      //get all users 
      users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('books');
      },
      //get all users by id
      user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('books');
      },
      {
            //get a single user by username
            (username: "<username-goes-here") {
                  username
                  email
                  savedBooks
                  books {
                     bookText
                  }
            }
            //get all books
            books {
                  _id
                  username
                  bookText
                  genres {
                        _id
                        username
                        genreChoices
                  }
            }
            //get a single book
            book(_id: "<book-id-here">) {
                  _id
                  username
                  bookText
                  genres {
                        username
                        genreChoices
                  }
            }

         

      }
      book: async (parent, {_id}) => {
            return Book.findOne({_id});
      }

      //get all users
}

module.exports = resolvers;