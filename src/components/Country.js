import React from 'react';
import './Country.css';
import { Link } from 'react-router-dom';

function Country({ ...props }) {
  const { country, confirmed } = props;
  const link = '/'+country
  return (
    <div className="country_container">
     <Link to={link} ><i className="fas fa-sign-in-alt" /></Link>
      <div>
        <h3>{country}</h3>
        <strong>{confirmed}</strong>
      </div>
    </div>
  );
}

export default Country;
