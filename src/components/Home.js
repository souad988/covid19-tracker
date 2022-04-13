import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';
import './Home.css';

function Home() {
  const data = useSelector((state) => state.countries);
  console.log('from home', data);
  return (
    <div className="home_container">
      <h1>Home</h1>
      <div className="home_country_list">
        {data.map(
          (item) => (
            <Country key={item.id} country={item} />
          ),
        )}
      </div>
    </div>

  );
}

export default Home;
