import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import { Switch, Route, BrowserRouter, Router } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
const generateClassName = createGenerateClassName({
  productionPrefix: "au",
  disableGlobal: true,
  seed: "au",
});

export default ({ history, AuthService }) => {
  const setAuth = AuthService?.setAuth || function () {};
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path={"/auth/signin"}>
            <SignIn onAuthChange={() => setAuth(true)} />
          </Route>
          <Route path={"/auth/signup"}>
            <SignUp onAuthChange={() => setAuth(true)} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
