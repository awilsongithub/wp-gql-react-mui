import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import Movies from './Movies/Movies';
import Movie from './Movie/Movie';

const client = new ApolloClient( {
  uri: 'http://localhost:10088/graphql'
} )

function App() {
  return (
    <ApolloProvider client={ client }>
      <BrowserRouter>
        <div>
          <header>
            <h1>Movie Site</h1>
          </header>
          <div className="content">
            <Route exact path="/" component={ Movies } />
            <Route exact path="/movies" component={ Movies } />
            <Route exact path="/movie/:slug" component={ Movie } />
          </div>
        </div>
      </BrowserRouter>
    </ApolloProvider>

  );
}

export default App;
