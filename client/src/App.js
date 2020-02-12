import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav"
import TextArea  from "./components/TextArea"
import Books from "../src/pages/Books";

class App extends Component {
  
  render() {
    return (
      <>
< Nav
/> <hr></hr>
{/* <TextArea  />  */}
<br></br>
<Books />

</>
    );
  }
}

export default App;
