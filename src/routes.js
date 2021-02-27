import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Context } from "./Context/AuthContext";

import Login from "./pages/Login";
import Home from "./pages/Home";

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <CustomRoute path="/" exact component={Login} />
        <CustomRoute isPrivate="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
