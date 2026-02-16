import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeLayout, Landing, Register, Login, DashboardLayout, Error } from './pages';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashboardLayout />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
