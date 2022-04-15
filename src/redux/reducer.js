import apiStoreService from '../api/apiServices';
import { incSortByCases, updateCountryNames, numberWithSpaces } from '../services';

export const initialState = { countries: [], global_cases: '' };

const SET_ALL = 'covid19/SET_ALL';

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL:
      return action.data;
    default:
      return state;
  }
};

const refactorResponse = (response) => Object.values(response.data.dates['2022-04-12'].countries);

export const setCountries = () => async (dispatch) => {
  const response = await apiStoreService.apiGetAll();
  const countries = refactorResponse(response);
  const global_cases = countries.reduce((a, b) => a + b.today_confirmed, 0);
  console.log('from reducer', incSortByCases(countries), global_cases);
  console.log();
  dispatch({ type: SET_ALL, data: { countries: updateCountryNames(countries), global_cases } });
};
