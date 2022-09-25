import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
// import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
});

const user = new ApolloClient({
  request: (operation) => {
    // link: httpLink,
    // cache: new InMemoryCache(),
    const token = localStorage.getItem("id_token");
  }
})
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          {/* <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={AddBooks} /> */}
          {/* <Route render={() => <h1 className='display-2'>Wrong page!</h1>} /> */}
        </Switch>
      </>
    </Router>
  );
}

export default App;
