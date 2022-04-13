export const regionsState = [];

const SET_ALL = 'covid19/SET_ALL';

export const regionsReducer = (state = regionsState, action) => {
  switch (action.type) {
    case SET_ALL:
      return action.regions;
    default:
      return state;
  }
};

//const refactorResponse = (response) => Object.values(response.data.dates['2022-04-12'].countries);

export const setRegions = (regions) =>{
  console.log('from reducer', countries);
  dispatch({ type: SET_ALL, regions });
};
