import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { LAUNCHES_QUERY } from '../apollo/Query';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h4>Loading...</h4>;
  if (error) console.log(error);

  return (
    <React.Fragment>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      <div>
        {data.launches.map(launch => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Launches;
