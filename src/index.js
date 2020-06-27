import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import { ApolloClient, InMemoryCache, HttpLink, gql, ApolloProvider } from "@apollo/client"

const URL = "https://agile-cliffs-85240.herokuapp.com/";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: URL
  })

});

const RANDOM_QUOTE_QUERY = gql`
query getRandomQuote {
  randomQuote {
    text
    author
  }
}
`;
client.query({ query: RANDOM_QUOTE_QUERY }).then(result => console.log(result.data))

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



