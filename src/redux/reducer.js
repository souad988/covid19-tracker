import apiStoreService from '../api/apiServices';
import { updateCountryNames } from '../services';

export const todayDate = (new Date()).toISOString().split('T')[0];
export const initialState = { countries: [], globalCases: '', date: todayDate };

const SET_ALL = 'covid19/SET_ALL';

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL:
      return action.data;
    default:
      return state;
  }
};

const refactorResponse = (response, date) => Object.values(response.data.dates[date].countries);

export const setCountries = (date) => async (dispatch) => {
  const myDate = date || todayDate;

  const response = await apiStoreService.apiGetAll(myDate);

  const countries = refactorResponse(response, date);
  const globalCases = countries.reduce((a, b) => a + b.today_confirmed, 0);
  countries.sort((a, b) => b.today_confirmed - a.today_confirmed);
  dispatch({
    type: SET_ALL,
    data:
    { countries: updateCountryNames(countries), globalCases, date: date || todayDate },
  });
};
