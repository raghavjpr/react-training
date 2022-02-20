import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { Register2 } from "../components/Register2";

export const AuthRouters2 = () => {
  console.log("Inside the AuthRouters2");
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register2></Register2>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
};
