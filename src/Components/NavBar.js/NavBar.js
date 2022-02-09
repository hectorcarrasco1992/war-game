import React, { Component } from "react";
import { render } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../store/authReducer";

const NavBar = ({ handleClick }) => (
  <div>
    <Link to="/game">War</Link>
    <Link to="/signin">Login</Link>
    <a href="#" onClick={handleClick}>
      Logout
    </a>
  </div>
);

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logoutUser());
    },
  };
};

export default connect(null,mapDispatch)(NavBar);
