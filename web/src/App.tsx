import React from "react";

import "./styles/App.css";
import AppProvider from "./hooks/AppProvider";
import Routes from "./routes/routes";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />;
    </AppProvider>
  );
};

export default App;
