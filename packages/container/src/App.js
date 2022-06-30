import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Progress from "./components/Progress";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <>
        
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path={"/auth"} component={AuthAppLazy} />
              <Route path={"/"} component={MarketingLazy} />
            </Switch>
          </Suspense>
        </>
      </StylesProvider>
    </BrowserRouter>
  );
};
