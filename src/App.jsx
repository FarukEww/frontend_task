import React from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Page2}></Route>
      <Route path="/page1" Component={Page1}></Route>
    </Routes>
  );
}

export default App;
