import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';
import './Home.css';
import load from '../assets/loading.gif'

function Home() {
  const [countries,setCountries] = useState([])
  const data = useSelector((state) => state.countries);
  
  console.log('from home', countries);
  return (
    <div className="home_container">
      
      <div className="home_country_list">
        {data.countries.length>0?
         data.countries.map(
          (item) => (
            <Country key={item.id} country={item} />
          ),
        ):
        <img src={load} alt='load' style={{width:'40px',height:'40px'}}/>
        }
      </div>
    </div>
  );
}

export default Home;
