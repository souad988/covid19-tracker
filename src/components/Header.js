import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setHeader } from '../redux/headerReducer';
import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const header_state = useSelector((state) => state.header);
  const countriesState = useSelector((state) => state.countries);
  console.log('header compnent', header_state.global_cases);
  const handleClick = (global_cases) => {
    dispatch(setHeader({ global_cases, img: '' }));
  };
  return (
    <div>
      <header>
        <nav>
          <Link to="/" onClick={() => handleClick(countriesState.global_cases)}>
            <i className="fas fa-chevron-left" />
            {' '}
          </Link>
          <span> Most cases</span>
          <div>
            <i className="fas fa-microphone" />
            <i className="fas fa-cog" />
          </div>
        </nav>
        {/* style={{backgroundImage: `url('https://mapsvg.com/static/maps/geo-calibrated/world.svg')`}} */}
       <div className='header_img'  >  
        <img src='https://mapsvg.com/static/maps/geo-calibrated/world.svg' alt='map' />
        <strong>  
          {' '}
          {header_state.global_cases > 0?'global cases :'+header_state.global_cases:'loading'}
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
