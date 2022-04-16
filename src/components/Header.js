import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setHeader } from '../redux/headerReducer';
import load from '../assets/loading.gif';
import './Header.css';
import { todayDate,setCountries }  from '../redux/reducer'
import {incrementeYearByOne,  decrementeYearByOne} from '../services'

function Header() {
  const dispatch = useDispatch();
  const headerState = useSelector((state) => state.header);
  const countriesState = useSelector((state) => state.countries);
  const incrementeDate=()=>{
      if(!countriesState.date===todayDate){
          dispatch(setCountries(incrementeYearByOne(countriesState.date)))
      }
  }
  const decrementeDate=()=>{
    if(countriesState.date.split('-')[0]>2019){
        console.log('decrement clicked', countriesState.date)
        dispatch(setCountries(decrementeYearByOne(countriesState.date)))
    }
}
  const handleClick = (globalCases) => {
    dispatch(setHeader({ globalCases, img: 'https://mapsvg.com/static/maps/geo-calibrated/world.svg', country: 'Global' }));
  };
  return (
    <div>
      <header>
        <nav>
          <Link to="/" onClick={() => handleClick(countriesState.globalCases)}>
            <i className="fas fa-home" />
            {' '}
          </Link>
          <strong>covid19 Tracker</strong>
          <div> 
            <i className="fas fa-microphone" />
            <i className="fas fa-cog" />
          </div>
        </nav>
        {/*  */}
        <div
          className="header_img"
          style={{ backgroundImage: `url(${headerState.img})` }}
        />
        <div className='header_date_filter'>
            <div onClick={()=>decrementeDate()}>
            <i className="fas fa-chevron-left" /></div>
              <p>
                {countriesState.date}
                {' '}
              </p>  
              <i className="fas fa-chevron-right" onClick={()=>incrementeDate()}/> 
         </div>
        <div className="header_info">
          {' '}
          {headerState.globalCases !== '' ? (

            <div>
              <strong>{headerState.country}</strong>
              <p>
                {headerState.globalCases}
                {' '}
                cases
              </p>
              
            </div>
          ) : <img src={load} alt="load" style={{ width: '40px', height: '40px' }} />}
        </div>
      </header>
      <section className="main">
        <Outlet />
      </section>
    </div>

  );
}

export default Header;
