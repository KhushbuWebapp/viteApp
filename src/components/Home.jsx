import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = ({ toggleval, settoggleval }) => {
  const handlelogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <Navbar
        handlelogout={handlelogout}
        toggleval={toggleval}
        settoggleval={settoggleval}
      />
    </div>
  );
};

export default Home;
