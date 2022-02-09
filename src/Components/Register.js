import { connect } from "react-redux";
import { signUpUser } from "../store/authReducer";
import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
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
    await this.props.signUpUser(this.state)
    
  }



  render() {
    return (
      <div>
        
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
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
          <button type="submit">Sign Up</button>
        </form>

        
      </div>
    );
  }
}

// Define the alert component

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (user) => dispatch(signUpUser(user))
  }
};

export default connect(null,mapDispatchToProps)(Register)