import React from 'react';
import './Country.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setRegions} from '../redux/regionReducer'

function Country({ ...props }) {
  const dispatch = useDispatch()  
  const { country } = props;
  const link = '/'+country.id
  const handleClick =(country)=>{  
    dispatch(setRegions(country.regions))  
  }
  return (
    <div className="country_container">
     <Link to={link} onClick={()=>handleClick(country)} ><i className="fas fa-sign-in-alt"  /></Link>
      <div>
        <h3>{country.id}</h3>
        <strong>{country.today_confirmed}</strong>
      </div>
    </div>
  );
}

export default Country;
