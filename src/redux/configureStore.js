import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { countriesReducer, initialState } from './reducer';
import { regionsReducer, regionsState } from './regionReducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  regions: regionsReducer,
});

const store = createStore((state,action)=>rootReducer(state,action),
  {countries:initialState, regions: regionsState}, composeWithDevTools(applyMiddleware(thunk)));
export default store;
