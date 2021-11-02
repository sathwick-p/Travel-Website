import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Signup from "./components/pages/Signup";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Home />
          <Route path="/services" exact component={Services}>
            <Services />
          </Route>
          <Route path="/products" exact component={Products} />
          <Route path="/sign-up" exact component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
