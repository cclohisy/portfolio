import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from "./pages/About/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio/Portfolio"
// import Navbar from "./components/Navbar"
import Welcome from "./pages/Welcome/Welcome"

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Welcome} />
      {/* <Navbar /> */}
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
    </div>
  </Router>
)

export default App;
