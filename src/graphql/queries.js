import gql from "graphql-tag";

// Query to get all Dashboard entries
export const GET_DASHBOARDS = gql`
  query GetDashboards {
    Dashboard {
      id
      name
      count
      last_updated
      type
    }
  }
`;

// Query to get a Dashboard entry by ID
export const GET_DASHBOARD_BY_ID = gql`
  query getDashboardById($id: Int!) {
    dashboard_by_pk(id: $id) {
      id
      name
      count
      last_updated
      type
    }
  }
`;

// Query to get all User entries
export const GET_USERS = gql`
  query getUsers {
    users {
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

// Query to get a User entry by ID
export const GET_USER_BY_ID = gql`
  query getUserById($id: Int!) {
    users_by_pk(id: $id) {
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
