import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { LAUNCH_QUERY } from '../apollo/Query';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

function Launch({ match }) {
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number: match.params.flight_number },
  });

  if (loading) return <h4>loading...</h4>;
  if (error) console.log(error);

  const {
    flight_number,
    mission_name,
    launch_year,
    launch_success,
    rocket: { rocket_id, rocket_name, rocket_type },
  } = data.launch;

  return (
    <React.Fragment>
      <div>
        <h1 className="display-4 my-3">
          <span className="text-muted">Mission:</span> {mission_name}
        </h1>
        <h4 className="mb-3">Launch Details</h4>
        <ul className="list-group">
          <li className="list-group-item">Flight Number: {flight_number}</li>
          <li className="list-group-item">Launch Year: {launch_year}</li>
          <li className="list-group-item">
            Launch Successful:{' '}
            <span
              className={classNames({
                'text-success': launch_success,
                'text-danger': !launch_success,
              })}
            >
              {launch_success ? 'Yes' : 'No'}
            </span>
          </li>
        </ul>

        <h4 className="my-3">Rocket Details</h4>
        <ul className="list-group">
          <li className="list-group-item">Rocket ID: {rocket_id}</li>
          <li className="list-group-item">Rocket Name: {rocket_name}</li>
          <li className="list-group-item">Rocket Type: {rocket_type}</li>
        </ul>
        <hr />
        <Link to="/" className="btn btn-secondary">
          Back
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Launch;
