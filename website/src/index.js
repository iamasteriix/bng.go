import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from '@apollo/client/link/error';


// log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

// TODO: define link
const link = from([
    errorLink,
    new HttpLink({uri: `http://localhost:3000/`})
])
  
// initialize ApolloClient instance
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})

// define higher-order component to wrap over the App component
const withApolloProvider = Comp => (
    <ApolloProvider client={client}>{ Comp }</ApolloProvider>
)

ReactDOM.render(
    withApolloProvider(
        <React.StrictMode>
            <App/>
        </React.StrictMode>),
  document.getElementById('root')
);
