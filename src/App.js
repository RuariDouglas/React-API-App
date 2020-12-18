import React from "react";
// PAGES
import Home from "./pages/Home";
// STYLES
import GlobalStyles from "./components/GlobalStyles";
// ROUTER
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* This is how we reder the same component for multiple routes. We create an array inside curly braces and pass in each route seperated by a comma  */}
      <Route Path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
