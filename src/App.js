import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from "./pages/About/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio/Portfolio"
// import Navbar from "./components/Navbar"
import Welcome from "./pages/Welcome/Welcome"
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

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
