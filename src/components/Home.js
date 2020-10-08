import React from "react";
import { useHistory } from "react-router-dom";
import home from "../css/Home.css";
import {
  NavDropdown,
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
  Container,
} from "react-bootstrap";

const Home = (props) => {
  const usercookie = localStorage.getItem("user");
  let history = useHistory();
  if (usercookie === null) {
    history.push("/sign-in");
  }
  console.log(usercookie);
  return (
    <div className="App">
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
