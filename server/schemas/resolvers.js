// import the gql tagged template function
const { AuthenticationError} = require("apollo-server-express");
const { Book, User } = require('../models');
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

            saved: async (parent, {bookId, searchText}, context) => {
                  if (context.user){
                  const updatedUser = await User.findOneByIdAndUpdate(
                        {_id: context.user._id}, 
                        {$addToSet: {saved: searchText}},
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
                              {$pull: {saved: {bookId: args.bookId}}},
                              {new: true}
                        );
                        return updatedUser;
                  }
                  throw new AuthenticationError('You need to be logged in');
            }
      }
};



module.exports = resolvers;