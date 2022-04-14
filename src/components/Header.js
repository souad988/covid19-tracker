import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setHeader } from '../redux/headerReducer';
import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const headerState = useSelector((state) => state.header);
  const countriesState = useSelector((state) => state.countries);
  console.log('header compnent', headerState.global_cases);
  const handleClick = (global_cases) => {
    dispatch(setHeader({ global_cases, img: 'https://mapsvg.com/static/maps/geo-calibrated/world.svg' }));
  };
  return (
    <div>
      <header>
        <nav>
          <Link to="/" onClick={() => handleClick(countriesState.global_cases)}>
          <i class="fas fa-home" />
            {' '}
          </Link>
          <strong>covid19 Tracker</strong>
          <div>
            <i className="fas fa-microphone" />
            <i className="fas fa-cog" />
          </div>
        </nav>
        {/*  */}
       <div className='header_img' 
       style={{backgroundImage: `url(${headerState.img})`}} >  
        {/* <img src='https://mapsvg.com/static/maps/geo-calibrated/world.svg' alt='map' /> */}
        <strong style={{marginRight:'5%'}}>  
          {' '}
          {headerState.global_cases > 0?'Total :'+headerState.global_cases:'loading'}
        </strong>
        </div>
      </header>
      <section className="main">
        <Outlet />
      </section>
    </div>

  );
}

export default Header;
