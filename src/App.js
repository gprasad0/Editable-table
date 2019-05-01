import React from "react";
import "./App.css";
import axios from "axios";
import Demotable from "./components/DemoTable";
class App extends React.Component {
  render() {
    return (
      <div>
        <Demotable />
      </div>
    );
  }
}

export default App;
