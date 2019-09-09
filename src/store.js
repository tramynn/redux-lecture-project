//comes with an import called createStore
import { createStore } from "redux";

//need initial state
const initialState = {
  username: "",
  favShow: ""
};

//create const variable and export
export const UPDATE_USERNAME = "UPDATE_USERNAME";

export const UPDATE_SHOW = "UPDATE_SHOW";

//create function
//use = sign for a default action
//don't need default or action but state
//first time set up, no redux state
//use initial state by default
//from there update
function reducer(state = initialState, action) {
  //create switch state
  //for types, use string
  console.log(action);
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        //create new object
        //take everything currently in store and override
        ...state,
        username: action.payload
      };
    case UPDATE_SHOW:
      return {
        ...state,
        favShow: action.payload
      };
    // always have default
    default:
      return state;
  }
}

export default createStore(reducer);
