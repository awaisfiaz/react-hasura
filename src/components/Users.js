import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { UPDATE_USER, DELETE_USER } from "../graphql/mutations";
import {GET_USERS} from "../graphql/queries"
import UserList from "./UserList";

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);

  const handleUpdate = async (
    id,
    name,
    email,
    gender,
    activity_status,
    year_of_study,
    activity_type,
    wellness_type
  ) => {
    try {
      await updateUser({
        variables: {
          id,
          name,
          email,
          gender,
          activity_status,
          year_of_study,
          activity_type,
          wellness_type,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser({ variables: { id } });
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <UserList
      users={data.users}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
    />
  );
};

export default Users;
