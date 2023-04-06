import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from "./App";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_HASURA_ENDPOINT,
  headers: {
    "x-hasura-admin-secret": process.env.REACT_APP_HASURA_SECRET,
  },
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
