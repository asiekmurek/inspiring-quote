import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './components/App';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from "@apollo/client"

const URL = "https://agile-cliffs-85240.herokuapp.com/";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: URL
  }),
  queryDeduplication: false

});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



