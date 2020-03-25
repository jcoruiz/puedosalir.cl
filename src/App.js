import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ReactGA from "react-ga";
ReactGA.initialize(process.env.REACT_APP_GA_ID || "");
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <content className="App-header">No.</content>
    </div>
  );
}

export default App;
