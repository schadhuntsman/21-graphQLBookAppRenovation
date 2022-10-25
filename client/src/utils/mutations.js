import gql from "graphql-tag";

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password){
            token user {
                  _id
                  username
            }
      }
   }
`;
export const ADD_USER = gql`
mutation savedBooks($book: SavedBookText!) {
      savedBooks(book: $book) {
            username
            email
            bookCount
            SavedBooks {
                  Authors
                  description
                  bookId
                  image
                  link
                  title
            }
      }
}
`;
export const REMOVE_BOOK = gql`
mtation removeBook(bookId: $bookId: String!) {
      removeBook(bookId: $bookId) {
            username
            email
            bookCount
            savedBooks{
                  authors
                  description
                  bookId
                  image
                  link
                  title

            }
      }

}
`;