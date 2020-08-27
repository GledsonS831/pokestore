import React from "react";

import "./styles/App.css";
import AppProvider from "./hooks/AppProvider";
import CartProvider from "./hooks/CartProvider";
import Routes from "./routes/routes";

const App: React.FC = () => {
  return (
    <AppProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </AppProvider>
  );
};

export default App;
