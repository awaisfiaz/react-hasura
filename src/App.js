import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import { client } from "./index.js";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Dashboard</h1>
        <Dashboard />
        <h1>Users</h1>
        <Users />
      </div>
    </ApolloProvider>
  );
};

export default App;
