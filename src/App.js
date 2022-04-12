import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import { setCountries } from './redux/reducer';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCountries());
    return () => {

    };
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
