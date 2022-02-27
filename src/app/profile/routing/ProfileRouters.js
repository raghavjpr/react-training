import React from "react";
import { Route, Routes } from "react-router-dom";
import AddEducation from "../components/AddEducation";
import AddExperience from "../components/AddExperience";
import Profile from "../components/Profile";

export const ProfileRouters = () => {
  console.log("inside the Profile Routers");
  return (
    <div>
      <Routes>
        <Route path="/create-profile" element={<Profile></Profile>}></Route>
        <Route
          path="/add-Education"
          element={<AddEducation></AddEducation>}
        ></Route>
        <Route
          path="/add-Experience"
          element={<AddExperience></AddExperience>}
        ></Route>
      </Routes>
    </div>
  );
};
