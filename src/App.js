import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import About from "./component/About";
// import Info from "./component/Info";
import Home from "./components/Home";
// import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />

          {/* <Route path="/person/:id" component={About} /> */}

          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
