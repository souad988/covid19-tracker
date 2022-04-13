export const regionsState = [];

const SET_REGIONS = 'covid19/SET_REGIONS';

export const regionsReducer = (state = regionsState, action) => {
  switch (action.type) {
    case SET_REGIONS:
      return action.regions;
    default:
      return state;
  }
};

//const refactorResponse = (response) => Object.values(response.data.dates['2022-04-12'].countries);

export const setRegions = (regions) =>{
  console.log('from region reducer', regions);
 return { type: SET_REGIONS, regions };
};
