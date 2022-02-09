import React, { Component } from "react";

import {
  Switch,
  Route,
  Router
  // BrowserRouter as Router,
} from "react-router-dom";
import Register from "./Components/Register";
import GameBoard from "./Components/GameBoard";
import SignIn from "./Components/Signin/Signin";
import history from "./history";

class MainRouter extends Component {
  render() {
    return (
      <div>
        <Router history={history} >
          <Switch>
            <Route exact path="/" component={Register} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/game" component={GameBoard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default MainRouter;
