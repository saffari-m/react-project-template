import ReactDOM from "react-dom";
import Test from "./components/test";

import "./index.css";

const App = () => (
  <div>
    <Test />
    {`Hi there, I'm React from Webpack 5.2`}
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
