import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../components/Profile";

export const ProfileRouters = () => {
  console.log("inside the Profile Routers");
  return (
    <div>
      <Routes>
        <Route path="/create-profile" element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
};
