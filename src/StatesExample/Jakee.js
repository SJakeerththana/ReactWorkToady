import React, { Component } from "react";

class StateApp extends Component {
  constructor() {
    super();
    this.state = {
      person: { name: "", city: "" }
    };
  }

  componentDidMount() {
    this.setState({
      person: { name: "Keerthu", city: "jaffna" }
    });
  }

  componentDidUpdate() {
    console.log("component has been updated", this.state);
  }
  render() {
    return (
      <div>
        <p>Name:{this.state.person.name}</p>
        <p>City:{this.state.person.city}</p>
      </div>
    );
  }
}
export default StateApp;
