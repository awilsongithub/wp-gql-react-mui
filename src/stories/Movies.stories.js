import Movies from '../components/Movies/Movies';

export default {
  title: "Movies",
  component: Movies
}

// passes in args
const Template = args => <Movies {...args} />;

export const WithRadius = Template.bind({});

WithRadius.args = {
  borderRadius: '4px'
}

