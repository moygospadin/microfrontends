import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress";
import Header from "./components/Header";
import { AuthService } from "./shared/services/AuthService";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
  disableGlobal: true,
  seed: "co",
});

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));
const AuthServiceInstance = new AuthService();
export default () => {
  const setAuth = AuthServiceInstance?.setAuth || function () {};
  const [isAuth, setIsAuth] = useState(AuthServiceInstance.isAuth);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <>
          <Header isAuth={isAuth} handleAuthChange={setAuth} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <AppWithRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
            </Switch>
          </Suspense>
        </>
      </StylesProvider>
    </BrowserRouter>
  );
};

const AppWithRoutes = ({ setIsAuth, isAuth }) => {
  const historyHook = useHistory();
  useEffect(() => {
    AuthServiceInstance.subscribe((val) => setIsAuth(val));
  }, []);
  useEffect(() => {
    historyHook.push("/");
  }, [isAuth]);

  return (
    <>
      {!isAuth && <Route path={"/auth"} component={AuthAppLazy} />}
      <Route path={"/"} component={MarketingLazy} />
    </>
  );
};
