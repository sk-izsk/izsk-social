import React, { lazy, Suspense } from "react";
import { createUseStyles } from "react-jss";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoadingScreen, NavBar } from "./components";
import { CustomTheme } from "./theme/theme";

const LoginScreen = lazy(() => import("./screens/login/login"));
const SignUpScreen = lazy(() => import("./screens/SignUp/SignUp"));

const useStyles = createUseStyles((theme: CustomTheme) => ({
  "@global": {
    body: {
      padding: 0,
      margin: 0,
      fontFamily: theme.fontProperties.fontFamily,
      scrollBehavior: "smooth",
    },
  },
}));

const App: React.FC = () => {
  useStyles();
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
