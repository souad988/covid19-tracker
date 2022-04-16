import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { setCountries } from './redux/reducer';
import Home from './components/Home';
import Header from './components/Header';
import Regions from './components/Regions';
import { setHeader } from './redux/headerReducer';

function App() {
  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countries);
  const todayDate = (new Date()).toISOString().split('T')[0];
  useEffect(() => {
    dispatch(setCountries(todayDate));
  }, []);
  useEffect(() => {
    dispatch(setHeader({
      globalCases: countriesState.globalCases,
      img: 'https://mapsvg.com/static/maps/geo-calibrated/world.svg',
      country: 'Global',
    }));
  }, [countriesState]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/:Regions" element={<Regions />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
