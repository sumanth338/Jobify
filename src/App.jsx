import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import HomeLayout from "./pages/HomeLayout";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<HomeLayout/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
