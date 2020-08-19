import React from "react";
import { ThemeProvider } from "styled-components";
import { global } from "./styles/themes";
const AppProvider = ({ children }: any) => (
  <ThemeProvider theme={global}>{children}</ThemeProvider>
);

export default AppProvider;
