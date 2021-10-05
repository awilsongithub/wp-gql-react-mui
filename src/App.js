import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom';
import Movies from './components/Movies/Movies';
import Movie from './components/Movie/Movie';
import Navbar from './components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme( {
  shadows: [
    'none',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
    '0 0 0 1px #e3e6e8',
  ],
  palette: {
    // type: 'light',
    primary: {
      main: '#354269',
    },
    secondary: {
      main: '#C2DDB0',
    },
    text: {
      primary: '#333333',
      secondary: 'rgb(102, 102, 102)',
      disabled: '#666666',
    },
    error: {
      main: '#eb5959',
    },
  },
  typography: {
    fontFamily: 'Lato',
  },
  // props: {
  //   MuiButtonBase: {
  //     disableRipple: true,
  //   },
  // },
  shape: {
    borderRadius: 2,
  },
} );

const client = new ApolloClient( {
  uri: 'http://localhost:10088/graphql'
} )

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <ApolloProvider client={ client }>
        <BrowserRouter>
          <div>

            <Navbar />
            <main className="main-content">
              {/* <Route exact path="/" component={ Movies } />
              <Route exact path="/movies" component={ Movies } />
              <Route exact path="/movie/:slug" component={ Movie } /> */}
              <Movies borderRadius={4}  />
            </main>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>

  );
}

export default App;
