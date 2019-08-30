import gql from 'graphql-tag';

export const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

export const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: String!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export default { LAUNCHES_QUERY, LAUNCH_QUERY };
