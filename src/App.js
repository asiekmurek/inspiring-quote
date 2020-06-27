import React from 'react';
import { gql, useQuery } from "@apollo/client";

export default function App() {
  return (
    <div className="App">
      <h1>Inspiring Quote</h1>
      <RandomQuote />
  </div>
  );
}

const RANDOM_QUOTE_QUERY = gql`
query getRandomQuote {
  randomQuote {
    text
    author
  }
}
`;

function RandomQuote(){
  const { data, loading, error } = useQuery(RANDOM_QUOTE_QUERY, {
    onError: (error) => {
      console.log("error", error)
      window.lastError = error;
    },
    fetchPolicy: "all"
  });
  if(loading) {
    return "Quote is loading";
  }
  if(error) {
    return "sorry we've got a problem";
  }
  const { text, author } = data.randomQuote;

  return <Quote text={text} author={author} />;
}

function Quote({ text, author }) {
  return (
    <blockquote>
        {text}
      <footer>{author}</footer>
    </blockquote>
  );
}
