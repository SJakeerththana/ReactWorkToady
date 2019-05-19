import React, { Component } from "react";
import { Input, Button } from "@material-ui/core";

class Login extends Component {
  render() {
    return (
      <div align="center">
        <h1>Login Here!</h1>
        <form>
          <Input
            placeholder="Enter the UserName"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Password"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Button
            variant="contained"
            color="secondary"
            style={{ width: "500px", padding: "10px", margin: "10px" }}
          >
            submit
          </Button>
        </form>
      </div>
    );
  }
}
export default Login;
