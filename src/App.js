import React from "react";
// import FirstComponent from "./Components/test"; //import components test folder - test.js
// import SecondComponent from "./Components/second";
import "./App.css";
import PrimarySearchAppBar from "./Components/Material/Navbar";
import LayoutComponent from "./Components/Material/Layout";
import StateComponent from "./StatesExample/keerthu";
import StateApp from "./StatesExample/Jakee";
// import FormComponent from "./Components/Material/Form";
// import Login from "./Components/Material/Login";
function App() {
  return (
    <div align="center">
      {/* <h1>This is my app</h1> */}
      {/* <FirstComponent />
      <SecondComponent /> */}
      <PrimarySearchAppBar />
      <LayoutComponent />
      <StateComponent />
      <StateApp />
      {/* <FormComponent /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
