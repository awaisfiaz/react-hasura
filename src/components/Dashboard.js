import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_DASHBOARD } from "./../graphql/mutations";
import DashboardList from "./DashboardList";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [type, setType] = useState("");
  const [createDashboard, { data }] = useMutation(CREATE_DASHBOARD);

  const handleCreate = () => {
    createDashboard({
      variables: { name, count, type },
    })
      .then(() => {
        setName("");
        setCount(0);
        setType("");
      })
      .catch((error) => {
        console.error("Error creating dashboard:", error);
      });
  };

  return (
    <div>
      <h2>Create Dashboard</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="count">Count</label>
        <input
          type="number"
          id="count"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
        />
        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <button type="button" onClick={handleCreate}>
          Create Dashboard
        </button>
      </form>
      {data && (
        <p>
          Successfully created dashboard with ID: {data.insert_dashboard_one.id}
        </p>
      )}

      <DashboardList />
    </div>
  );
};

export default Dashboard;
