import React from 'react';
import classnames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) {
  return (
    <React.Fragment>
      <div className="card card-body bg-dark mb-3">
        <div className="row">
          <div className="col-md-9">
            <h4>
              <span className="text-muted">Mission: </span>
              <span
                className={classnames({
                  'text-success': launch_success,
                  'text-danger': !launch_success,
                })}
              >
                {' '}
                {mission_name}
              </span>
            </h4>
            <p className="text-primary">
              Date:{' '}
              <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
            </p>
          </div>
          <div className="col-md-3">
            <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
              Launch Details
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LaunchItem;
