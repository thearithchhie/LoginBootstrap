import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
const LoginComponent = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    let val = "";
    setEmail(val);
    setPassword(val);
  }, []);
  const emailOnChangle = (e) => {
    setEmail(e.target.value);
  };
  const passwordOnChangle = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "admin" && password === "123") {
      localStorage.setItem("user", email);
      //alert("Successfull");
    } else {
      alert("Error");
    }
    history.push("/");
  };
  // const a = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="signin">
      <Form onSubmit={onSubmit}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={emailOnChangle}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={passwordOnChangle}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </Form>
      <h6>{"Email : " + email}</h6>
      <h6>{"Password : " + password}</h6>
      {/* <h6>{"localStore : "+localStorage.getItem("user"),email}</h6> */}
    </div>
  );
};

export default LoginComponent;
