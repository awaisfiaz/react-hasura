import { gql } from "@apollo/client";

// Mutation to create a new Dashboard entry
export const CREATE_DASHBOARD = gql`
  mutation CreateDashboard($name: String!, $count: Int!, $type: String!) {
    insert_Dashboard_one(object: { name: $name, count: $count, type: $type }) {
      id
      name
      count
      last_updated
      type
    }
  }
`;

export const UPDATE_DASHBOARD = gql`
  mutation UpdateDashboard(
    $id: Int!
    $name: String!
    $count: Int!
    $type: String!
  ) {
    update_Dashboard_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name, count: $count, type: $type }
    ) {
      id
      name
      count
      last_updated
      type
    }
  }
`;

export const DELETE_DASHBOARD = gql`
  mutation DeleteDashboard($id: Int!) {
    delete_Dashboard_by_pk(id: $id) {
      id
      name
      count
      last_updated
      type
    }
  }
`;

// Mutation to create a new User entry
export const CREATE_USER = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $gender: String
    $activity_status: String
    $year_of_study: Int
    $activity_type: String
    $wellness_type: String
    $created_at: timestamptz
  ) {
    insert_users_one(
      object: {
        name: $name
        email: $email
        gender: $gender
        activity_status: $activity_status
        year_of_study: $year_of_study
        activity_type: $activity_type
        wellness_type: $wellness_type
        created_at: $created_at
      }
    ) {
      id
      name
      email
      gender
      activity_status
      year_of_study
      activity_type
      wellness_type
      created_at
    }
  }
`;

// Mutation to update an existing User entry by ID
export const UPDATE_USER = gql`
  mutation updateUser(
    $id: Int!
    $name: String!
    $email: String!
    $gender: String
    $activity_status: String
    $year_of_study: Int
    $activity_type: String
    $wellness_type: String
    $created_at: timestamptz
  ) {
    update_users_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        email: $email
        gender: $gender
        activity_status: $activity_status
        year_of_study: $year_of_study
        activity_type: $activity_type
        wellness_type: $wellness_type
        created_at: $created_at
      }
    ) {
      id
      name
      email
      gender
      activity_status
      year_of_study
      activity_type
      wellness_type
      created_at
    }
  }
`;

// Mutation to delete a User entry by ID
export const DELETE_USER = gql`
  mutation deleteUser($id: Int!) {
    delete_users_by_pk(id: $id) {
      id
      name
      email
      gender
      activity_status
      year_of_study
      activity_type
      wellness_type
      created_at
    }
  }
`;
