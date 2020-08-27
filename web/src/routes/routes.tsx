import React from "react";

import { BrowserRouter } from "react-router-dom";

import HomeRoute from "./Home";
import ThanksRoute from "./Thanks";

const Routes = () => {
  return (
    <BrowserRouter>
      <HomeRoute />
      <ThanksRoute />
    </BrowserRouter>
  );
};

export default Routes;
