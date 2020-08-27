import React from "react";
import { Route } from "react-router-dom";
import Home from "../../pages/Home";

const HomeRoute = () => {
  return <Route name="Home" path="/" exact component={Home} />;
};

export default HomeRoute;
