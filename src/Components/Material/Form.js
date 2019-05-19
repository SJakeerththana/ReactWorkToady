import React, { Component } from "react";
import { Input, Button } from "@material-ui/core";

class FormComponent extends Component {
  render() {
    return (
      <div align="center">
        <h1>Register Form</h1>
        <form>
          <Input
            placeholder="Enter the firstName"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter the LastName"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter your Email"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter your Mobile"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Button
            color="primary"
            variant="contained"
            style={{ width: "500px", padding: "10px", margin: "10px" }}
          >
            submit
          </Button>
        </form>
      </div>
    );
  }
}
export default FormComponent;
