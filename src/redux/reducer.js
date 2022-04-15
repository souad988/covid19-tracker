import apiStoreService from '../api/apiServices';
import { updateCountryNames } from '../services';

export const initialState = { countries: [], globalCases: '' };

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
  const globalCases = countries.reduce((a, b) => a + b.today_confirmed, 0);
  countries.sort((a, b) => b.today_confirmed - a.today_confirmed);
  dispatch({ type: SET_ALL, data: { countries: updateCountryNames(countries), globalCases } });
};
