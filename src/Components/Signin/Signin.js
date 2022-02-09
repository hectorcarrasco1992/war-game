import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../store/authReducer";



import "./Signin.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.loginUser(this.state)
    
  }

  render() {
    return (
      <div>
        
        <form onSubmit={this.handleSubmit}>
          <label>
            Email or username
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Sign In</button>
        </form>

        
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
  };
};

const mapStateToProps = (state) => {
  return {
    authReducer:state.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
