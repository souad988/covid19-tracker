import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Regions.css';

function Regions() {
  const country = useParams().Regions;
  const regions = useSelector((state) => state.regions);
  return (
    <div className="Regions_container">
      <ul>
        {regions.length < 1 ? <div className="regions_error">{`!! No regional data provided for ${country}`}</div> : (

          regions.map((region) => (
            <li key={region.id}>
              <strong>{region.name}</strong>
              <div>
                <strong>{region.today_confirmed}</strong>
                <i className="fas fa-sign-in-alt" />
              </div>
            </li>
          ))

        )}
      </ul>
    </div>
  );
}

export default Regions;
