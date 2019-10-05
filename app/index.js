import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Popular } from "./components/Popular";

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
        <p>Today is {new Date().toLocaleString()}</p>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("app"));
