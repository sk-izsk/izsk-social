import React, { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoadingScreen, NavBar } from "./components";

const LoginScreen = lazy(() => import("./screens/login/login"));
const SignUpScreen = lazy(() => import("./screens/SignUp/SignUp"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Suspense fallback={<LoadingScreen />}>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/signup" exact component={SignUpScreen} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
