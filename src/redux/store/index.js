import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import ReduxThunk from 'redux-thunk';

let middleware = [ReduxThunk];

const store = createStore(reducer, {}, composeWithDevTools(
  applyMiddleware(...middleware),
));

export default store;
