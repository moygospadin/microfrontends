import React from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import { Switch, Route, BrowserRouter, Router } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
const generateClassName = createGenerateClassName({
  productionPrefix: "au",
  disableGlobal: true,
});

export default ({ history }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path={"/auth/signin"} component={SignIn} />
          <Route path={"/auth/signup"} component={SignUp} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
