import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import Login from "./components/LoginComponent";
import SignUp from "./components/SignupComponent";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Post from './components/Post';
const App = () => {
  return (
    <Router>
      <div className="App">
        <form className="frm">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>
                THEARITH
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to={"/about"}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to={"/service"}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to={"/contact"}>
                      Contact <i class="fas fa-id-badge"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <Route exact path="/" component={Home} />
            <div className="auth-inner">
              <Switch>
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
                <Route path="/contact" component={Contact} />
                <Route path="/:id" component={Post}/>
              </Switch>
            </div>
          </div>
        </form>
      </div>
    </Router>
  );
};

export default App;
