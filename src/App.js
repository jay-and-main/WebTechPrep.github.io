import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ComplexComponents from "./codes/ComplexComponents";
import Spread from "./codes/Spread";
import UsingProps from "./codes/UsingProps";
import StateLessComp from "./codes/StateLessComp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complex-components" element={<ComplexComponents />} />
          <Route path="/complex-components-props" element={<UsingProps />} />
          <Route path="/complex-components-spread" element={<Spread />} />
          <Route path="/stateless" element={<StateLessComp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
