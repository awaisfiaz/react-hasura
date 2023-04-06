import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_DASHBOARDS } from "../graphql/queries";
import { DELETE_DASHBOARD, UPDATE_DASHBOARD } from "../graphql/mutations";

const DashboardList = () => {
  const { loading, error, data } = useQuery(GET_DASHBOARDS);
  const [deleteDashboard] = useMutation(DELETE_DASHBOARD);
  const [updateDashboard] = useMutation(UPDATE_DASHBOARD);

  const handleDelete = (id) => {
    deleteDashboard({
      variables: { id },
    })
      .then(() => {
        // Handle successful deletion, e.g. show a success message
      })
      .catch((error) => {
        console.error("Error deleting dashboard:", error);
      });
  };

  const handleUpdate = (id, name, count, type) => {
    updateDashboard({
      variables: { id, name, count, type },
    })
      .then(() => {
        // Handle successful update, e.g. show a success message
      })
      .catch((error) => {
        console.error("Error updating dashboard:", error);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Dashboard List</h2>
      <ul>
        {data.Dashboard.map(({ id, name, count, type }) => (
          <li key={id}>
            {name} - Count: {count} - Type: {type}
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
            <button
              type="button"
              onClick={() => handleUpdate(id, name, count, type)}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardList;
