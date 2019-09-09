import React, { Component } from "react";
//import store
import store, { UPDATE_SHOW } from "../store";

export default class Profile extends Component {
  constructor() {
    super();
    // import all from store
    this.state = store.getState();
  }
  // subscription -- every time something happens, something happens
  // subscribe to redux store -- run some code, every time store changes
  // store.subscribe() -- clicking subscribe button, always want component
  // only subscribe if you want to return state that you dispatched from

  componentDidMount() {
    //subscribe after component mounts
    //take in cb function
    store.subscribe(() => {
      //run this code every time redux state changes
      //from store, getState(), and property you want to update
      this.setState({ favShow: store.getState().favShow });
    });
  }

  handleChange = e => {
    // create an action after view
    let action = {
      // what type from sotre
      type: UPDATE_SHOW,
      // what information do i want to put in the redux store
      payload: e.target.value
    };
    //accessing store, dispatch method, and passing in action
    store.dispatch(action);
    console.log(store.getState());
  };
  render() {
    return (
      <div>
        <input placeholder="Favorite Show" onChange={this.handleChange} />
        <input placeholder="Favorite Movie" />
        <input placeholder="Favorite Color" />
        <input placeholder="Favorite Food" />
        <input placeholder="Favorite Band" />
        {/* first way */}
        {/* <h1>Welcome back, {store.getState().username}</h1> */}
        {/* second way */}
        <h1>Welcome back, {this.state.username}</h1>
        <h2>Favorite Show: {this.state.favShow}</h2>
      </div>
    );
  }
}
