import React from "react";
import { Route } from "react-router-dom";
import Thanks from "../../pages/Thanks";
const ThanksRoute = () => {
  return <Route  name="Thanks" component={Thanks} path="/thanks" />;
};

export default ThanksRoute;
