// const faker = require('faker');
// const db = require('../config/connection');
// const { Book, User } = require('../models');

// db.once('open', async () => {
//       await Book.deleteMany({});
//       await User.deleteMany({});

//       //create user data
//       const userData = [];

//       for (let i = 0; i < 50; i += 1) {
//             const username = faker.internet.userName();
//             const email = faker.internet.email(userName);
//             const password = faker.internet.password();

//             userData({ username, email, password });
//       }

//       const createdUser = await User.collection.insertMany(userData);

//       const savedBooks = [];
      
//       for (let i = 0; i < 30; i += 1) {
//             const authors = faker.internet.Authors();
//             const description = faker.internet.Description();
//             const bookId = faker.internet.BookId();
//             const image = faker.internet.Image();
//             const link = faker.internet.Link();
//             const title = faker.intenet.Title();

//             savedBooks ({ authors, description, bookId, image, link, title });
//       }

//       const bookCount = await Book.collection.insertMany(bookData)

//       //create friends
//       for (let i = 0; i < 100; i += 1) {
//             const randomUserIndex = Math.floor(Math.random() * createdUser.ops.length);
//             const { _id: userId } = createdUser.ops[randomUserIndex];

//             let friendId = userId;

//             while ( friendId === userId ) {
//                   const randomUserIndex = Math.floor(Math.random() * createdUser.ops.length);
//                   firnedId = createdUser.ops[randomUserIndex];
//             }

//             await User.updateOne({ _id: userId }, {$addToSet: {firends: firnedId}});
//       }
      
//       //create books
//      for (let i = 0; i < 100; i += 1) {
//       const BookText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

//       const randomUserIndex = Math.floor(Math.random() * createdUser.ops.length);
//       const { username, _id: userId } = createdUser.ops[randomUserIndex];

//       const createdBook = await Book.create({ BookText, username});

//       const updatedUser = await User.updateOne(
//       { _id: userId },
//       { $push: { books: createdBook._id }}
//       );

//       createdBook.push(createdBook);
//       }

//       create 
// })