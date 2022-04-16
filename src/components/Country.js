import React from 'react';
import './Country.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setRegions } from '../redux/regionReducer';
import { setHeader } from '../redux/headerReducer';

function Country({ ...props }) {
  const dispatch = useDispatch();
  const {
    id, name, confirmed, regions,
  } = props;
  const link = `/${id}`;
  const imgUrl = `https://mapsvg.com/static/maps/geo-calibrated${link}.svg`;
  const handleClick = () => {
    dispatch(setRegions(regions));
    dispatch(setHeader({
      globalCases: confirmed,
      img: imgUrl,
      country: name,
    }));
  };
  return (
    <div className="country_container">
      {/* <img src={imgUrl} alt='map' /> */}
      <div className="country_img" style={{ backgroundImage: `url(${imgUrl})` }} />
      <div className="country_info_side">
        <Link to={link} onClick={() => handleClick()}><i className="fas fa-sign-in-alt" /></Link>
        <div>
          <strong>{name}</strong>
          <br />
          <strong>{confirmed}</strong>
        </div>
      </div>
    </div>
  );
}

export default Country;
Country.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  confirmed: PropTypes.string.isRequired,
  regions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    confirmed: PropTypes.string,
  })),
};

Country.defaultProps = {
  regions: [{
    id: '',
    name: '',
    confirmed: 0,
  }],
};
