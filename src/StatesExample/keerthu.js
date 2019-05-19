import React, { Component } from "react";
import { Button } from "@material-ui/core";

class StateComponent extends Component {
  constructor() {
    super();
    this.changeName = this.changeName.bind(this);
    // this.changeAddress = this.changeAddress.bind(this);
    // this.changeSchool = this.changeSchool.bind(this);
    this.state = {
      name: "Keerthu",
      address: "mallakam",
      school: "J/Union college"
    };
  }
  changeName() {
    this.setState({
      name: "Suji",
      address: "manipay",
      school: "J/Union college"
    });
  }
  render() {
    return (
      <div align="center">
        <h1>{this.state.name}</h1>
        <br />
        <h1>{this.state.address}</h1>
        <br />
        <h1>{this.state.school}</h1>
        <br />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          onClick={this.changeName}
        >
          change
        </Button>
      </div>
    );
  }
}
export default StateComponent;
