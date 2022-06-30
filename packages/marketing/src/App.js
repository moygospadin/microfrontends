import React from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import { Switch, Route, BrowserRouter, Router } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
  disableGlobal: true,
});

export default ({ history }) => {
  
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path={"/pricing"} component={Pricing} />
          <Route exact path={"/"} component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
