import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/layout/Header";
import Page from "./components/layout/Page";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Page />
      </div>
    </BrowserRouter>
  );
}

export default App;
