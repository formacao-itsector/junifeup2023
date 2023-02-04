import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reduxExampleReducer, ReduxExampleState } from '.';

/** Store Type */
export interface StoreState {
  reduxExample: ReduxExampleState;
}

const appReducers = combineReducers({
  reduxExample: reduxExampleReducer,
});

export const reduxStore = createStore(appReducers, composeWithDevTools());
