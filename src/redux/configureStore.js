import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { countriesReducer, initialState } from './reducer';

// const rootReducer = combineReducers({
//   global: globalReducer,
//   categories: categoriesReducer,
// });

const store = createStore(countriesReducer,
  initialState, composeWithDevTools(applyMiddleware(thunk)));
export default store;
