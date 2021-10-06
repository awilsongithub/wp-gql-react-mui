// @ts-nocheck
import React from 'react';
import Button from '@mui/material/Button';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const Movies = (props) => (
  <Query query={ moviesQuery }>
    {
      ( { loading, error, data } ) => {
        if ( loading ) {
          return ( <h1>Loading...</h1> );
        } else if ( error ) {
          return ( <h3>Error</h3> );
        } else {
          return getMoviesMarkup( data, props);
        }
      }
    }
  </Query>
);

export const moviesQuery = gql`
  query moviesQuery {
    movies {
      edges {
        node {
          uri
          title
          slug
          movie {
            description
            director
            length
            rating
            title
            poster {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

const getMoviesMarkup = ( data, props ) => {
  console.log( data );
  const movies = data.movies.edges;
  const cardStyles = {
    borderRadius: props.borderRadius + 'px'
  }

  return (
    <Container fixed>
      <div className="movie-cards">
        {
          movies.map( ( movieObject, key ) => {
            const movie = movieObject.node.movie;
            return (
              <Card  key={ key } style={ cardStyles } >
                <CardMedia
                  component="img"
                  height="180"
                  image={ movie.poster.sourceUrl }
                  alt={ movie.poster.altText }
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    { movie.title }
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Director: { movie.director }
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    { movie.description }
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">IMDB Rating: { movie.rating }</Button>
                  <Button size="small">Length: { movie.length }</Button>
                </CardActions>
              </Card>
            )
          } )
        }
      </div>
    </Container>
  );
};

Movies.propTypes = {
  borderRadius: PropTypes.number
};

export default Movies;
