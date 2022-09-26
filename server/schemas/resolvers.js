// import the gql tagged template function
const { AuthenticationError} = require("apollo-server-express");
const { Book, User } = require('../models');
const { gql } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
      Query: {
            me: async (parent, args, context) => {
                  if (context.user){
               
                  const userData = await User.findOne({ _id: context.user._id})
                  .select('-__v -password')
                  .populate('books');
                  
                  return userData ;
            }
            throw new AuthenticationError('Not logged in!');
         }
      },

            Mutation: {
            login: async (parent, { email, password }) => {
                  const user = await User.FindOne ({email});
                  

                  if (!user) {
                        throw new AuthenticationError('Incorrect credentials');
                  }
                  const correctPw = await user.isCorrectPassword(password);
                  
                  if (!correctPw) {
                        throw new AuthenticationError("Incorrect credentials");
                  }
                  const token = signToken(user);
                  return { token, user };
                  
            },

            saveBook: async (parent, {bookId, searchText}, context) => {
                  if (context.user){
                  const updatedUser = await User.findOneByIdAndUpdate(
                        {_id: context.user._id}, 
                        {addToSet: {saveBook: searchText}},
                        {#push: {books: books._id}},
                        {new: true}
                  );
                  
                  return updatedUser ;
            }
            throw new AuthenticationError('You need to be logged in');

            },
            removeBook: async (parent, args, context) => {
                  if (context.user) {
                        const updatedUser = await User.findOneByIdAndUpdate(
                              {_id: context.user._id},
                              {$pull: {saveBook: {bookId: args.bookId}}},
                              {new: true}
                        );
                  }
            }
      }
            
            
       


//             mutation login($email: String!, $password: String!) {
//                   login(email: $email, password: $password) {
//                     _id
//                     username
//                     email

//                   return userData;
//                   }
//                   throw new AuthenticationError('Not logged in');
//                 }
//              },
                        

//                   },
                  
//       }
// }

      // books: async (parent, {_id }) => {
      //       return Book.findOne({_id });
      // },
      //get all users 
      // users: async () => {
      //       return User.find()
      //       .select('-__v -password')
      //       .populate('books');
      // },
      //get all users by id
      // user: async (parent, { username }) => {
      //       return User.findOne({ username })
      //       .select('-__v -password')
      //       .populate('books');
      // },
      
      //       //get a single user by username
      //       getSingleUser({ user = null, params }, res) {
      //             const userFound = await User.findOne({ 
      //                   $or: [{ _id: user ? user._id : prams.id }, { username: params.username}],
      //             });
      //       }

            // (username: "<username-goes-here>") {
            //       username
            //       email
            //       savedBooks
            //       books {
            //          bookText
            //       }
            // }
      
            //get all books
            // books {
            //       _id
            //       username
            //       bookText
            //       genres {
            //             _id
            //             username
            //             genreChoices
            //       },
            
            // //get a single book
            // book(_id: "<book-id-here">) {
            //       _id
            //       username
            //       bookText
            //       genres {
            //             username
            //             genreChoices
            //       }
            }

         

      


      //get all users

}

module.exports = resolvers;