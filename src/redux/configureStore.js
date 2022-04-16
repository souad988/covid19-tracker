import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { countriesReducer, initialState } from './reducer';
import { regionsReducer, regionsState } from './regionReducer';
import { headerReducer, headerState } from './headerReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  regions: regionsReducer,
  header: headerReducer,
});

const store = createStore((state, action) => rootReducer(state, action),
  { countries: initialState, regions: regionsState, header: headerState },
  composeWithDevTools(applyMiddleware(thunk)));
export default store;
