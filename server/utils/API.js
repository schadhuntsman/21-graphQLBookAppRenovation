import { query } from "express";

// route to get logged in user info, but needs the token
export const getMe = (token) => {
     return fetch('/api/users/me', {
       headers: {
         'Content-Type': 'application/json',
         authorization: `Bearer ${token}`,
       },
     });
   };

   export const createUser = (userFormData) => {
     return fetch('/api/users', {
     method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
         body: JSON.stringify(userFormData),
       }),
     };

     export const loginUser = (userFormData) => {
          return fetch('/api/users/login', {
          method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
              body: JSON.stringify(userFormData),
            }),
          };

          export const saveBook = (bookData, token) => {
               return fetch('/api/users', {
               method: 'PUT',
                 headers: {
                   'Content-Type': 'application/json', authorization: `Bearer ${token}`,
                 },
                   body: JSON.stringify(bookData),
                 }),
               };

                    export const deleteBook = (bookId, token) => {
                         return fetch(`/api/users/books/{$bookId}`, {
                         method: 'DELETE',
                           headers: {
                            authorization: `Bearer ${token}`,
                           },
                         }),
                    };

                    export const searchGoogleBooks = (query) => {
                         return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
                    };