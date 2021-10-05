import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class Movie extends Component {
  render() {
    if ( !this.props.data.movie ) {
      return <h1>Loading...</h1>
    } else {
      console.log( this.props );
      const movie = this.props.data.movie;

      return (
        <div>
          <h2>{ movie.title }</h2>
          <strong>{ movie.movie.price }</strong>
          <br />
          <strong>{ movie.movie.watts }</strong>
        </div>
      );
    }
  }
}

const getMovieBySlug = gql`
  query getMovieBySlug($slug: String) {
    movie: movieBy(uri: $slug) {
      slug
        title
        uri
        movie {
          director
          description
          length
          poster {
            altText
            uri
          }
          rating
          title
        }
    }
  }
`;

export default graphql( getMovieBySlug, {
  options: ( props ) => {
    const slug = props.match.params.slug;
    return {
      variables: {
        slug
      }
    }
  }
} )( Movie );


