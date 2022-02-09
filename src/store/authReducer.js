import axios from "axios";
import history from "../history";
const LOGIN = "LOGIN";
const SIGN_UP = "SIGN_UP";
const LOGOUT = "LOGOUT";

export const login = (user) => {
  return {
    type: LOGIN,
    user,
  };
};
export const signUp = (user) => {
  return {
    type: SIGN_UP,
    user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const user = await axios.post("http://localhost:3001/users/login",data);
      dispatch(login(user));
      history.push("/game");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signUpUser = (user) => {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:3001/users/create-user", user);
      dispatch(signUp(user));
      history.push("/game");
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutUser = () => {
  return async(dispatch) => {
    try {
      await axios.get('http://localhost:3001/users/logout')
      dispatch(logout())
      history.push('/signin')
    } catch (error) {
      console.log(error);
    }
  }
}
export default function  (state = {}, action){
  switch (action.type) {
    case LOGIN:
      console.log(action.user.data);
      console.log(state);
      return {...state, user:action.user.data}
    case SIGN_UP:
      return action.user;
    case LOGOUT:
      return state
    default:
      return state;
  }
};
