import React from 'react';
import './Country.css';

function Country({ ...props }) {
  const { country, confirmed } = props;
  return (
    <div className="country_container">
      <i className="fas fa-sign-in-alt" />
      <div>
        <h3>{country}</h3>
        <strong>{confirmed}</strong>
      </div>
    </div>
  );
}

export default Country;
