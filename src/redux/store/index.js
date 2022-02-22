import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import combineReducers from "../reducers"; // in place of combineReducers we can also use rootReducers
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
// default state of the application

// middleware thunk
const middleware = [thunk];

const store = createStore(
  combineReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
); // we will provide accessibility to the middleware and redux-devtools(only for devepotment)

// to get the current state
let currentState = store.getState();

// subscribe bisterner
// getting the token (for private endpoints)
store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();
}); // we can compare the data from two states and then decide to take a call to update the token

export default store;
