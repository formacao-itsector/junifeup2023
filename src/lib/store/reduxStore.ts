import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reduxExampleReducer, ReduxExampleState } from './reduxExample';

/** Store Type */
export interface ReduxStoreState {
  reduxExample: ReduxExampleState;
}

const appReducers = combineReducers({
  reduxExample: reduxExampleReducer,
});

export const reduxStore = createStore(appReducers, composeWithDevTools());
