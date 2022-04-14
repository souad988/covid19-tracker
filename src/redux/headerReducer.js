export const headerState = { img: 'https://mapsvg.com/maps/world.svg', global_cases: '' };

const SET_HEADER = 'covid19/SET_HEADER';

export const headerReducer = (state = headerState, action) => {
  switch (action.type) {
    case SET_HEADER:
      return action.data;
    default:
      return state;
  }
};

export const setHeader = (data) => ({ type: SET_HEADER, data });
