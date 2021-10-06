import Movies, { moviesQuery } from '../components/Movies/Movies';

export default {
  title: "Movies",
  component: Movies
}

// passes in args
const Template = args => <Movies { ...args } />;

export const WithRadius = Template.bind( {} );

WithRadius.args = {
  borderRadius: '4px',

  apolloClient: {
    // do not put MockedProvider here, you can, but its preferred to do it in preview.js
    mocks: [
      {
        request: {
          query: moviesQuery,
        },
        result: {
          data: {
            viewer: null,
          },
        },
      },
    ],
  }


}

