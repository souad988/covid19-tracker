export const regionsState = [];

const SET_REGIONS = 'covid19/SET_REGIONS';

export const regionsReducer = (state = regionsState, action) => {
  switch (action.type) {
    case SET_REGIONS:
      return action.data;
    default:
      return state;
  }
};

export const setRegions = (regions) => {
  const data = (regions.length === 0) ? [] : regions;
  return { type: SET_REGIONS, data };
};
