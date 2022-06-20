import React from "react";
import Router from "@routers/router";
import ReactDOM from "react-dom";
import "@styles/global.css";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <h1>Lazy Loading Example</h1>
          <Router />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
