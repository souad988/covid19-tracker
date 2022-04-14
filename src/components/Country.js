import React from 'react';
import './Country.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setRegions } from '../redux/regionReducer';
import { setHeader } from '../redux/headerReducer';

function Country({ ...props }) {
  const dispatch = useDispatch();
  const { country } = props;
  const link = `/${country.id}`;
  const imgUrl = 'https://mapsvg.com/static/maps/geo-calibrated'+link+'.svg'
  const handleClick = (country) => {
    dispatch(setRegions(country.regions));
    dispatch(setHeader({ global_cases: country.today_confirmed, img: imgUrl }));
  };
  return (
    <div className="country_container" > 
      {/* <img src={imgUrl} alt='map' /> */}
      <div className='country_img'  style={{backgroundImage: `url(${imgUrl})`}}>
      <div className='country_info_side'> 
      <Link to={link} onClick={() => handleClick(country)} ><i className="fas fa-sign-in-alt" /></Link>
      <div>
        <strong>{country.name}</strong><br/>
        <strong>{country.today_confirmed}</strong>
      </div>
      </div></div>
      </div>
  );
}

export default Country;
