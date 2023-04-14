import React from "react";
import Home from "./pages/Home";
import QuantityProvider from "./context/Quantity.context";

function App() {
  return (
    <>
      <QuantityProvider>
        <Home />
      </QuantityProvider>
    </>
  );
}

export default App;
