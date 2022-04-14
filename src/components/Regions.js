import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Regions.css'

function Regions() {
  const country = useParams().Regions;
  const regions = useSelector((state) => state.regions);
  console.log('regions', regions);
  return (
    <div className='Regions_container'>
      <h3>
        {' '}
        {country}
      </h3><ul>
      {regions.length < 1 ? `No regional data provided for ${country}` : (
        
          regions.map((region) => (
            <li key={region.id}>
              <strong>{region.name}</strong>
              
              <strong>{region.today_confirmed}</strong>
            </li>
          ))
        
      )}
      </ul>
    </div>
  );
}

export default Regions;
