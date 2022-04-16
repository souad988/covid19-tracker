import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';
import './Home.css';
import load from '../assets/loading.gif';

function Home() {
  const data = useSelector((state) => state.countries);
  const [visibleData, setVisibleData] = useState(data.countries);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    setVisibleData(data.countries);
  }, [data]);
  useEffect(() => {
    const search = searchName.trim().toLowerCase();
    setVisibleData(data.countries.filter((country) => country.name.toLowerCase().includes(search)));
  }, [searchName]);

  const filterByName = (e) => {
    setSearchName(e.target.value);
  };
  return (
    <div className="home_container">
      <input name="countryName" type="text" placeholder="search country" onChange={filterByName} value={searchName} />
      <div className="home_country_list">
        {visibleData.length > 0
          ? visibleData.map(
            (item) => (
              <Country
                key={item.id}
                id={item.id}
                name={item.name}
                regions={item.regions}
                confirmed={item.today_confirmed}
              />
            ),
          )
          : <img src={load} alt="load" style={{ width: '40px', height: '40px' }} />}
      </div>
    </div>
  );
}

export default Home;
