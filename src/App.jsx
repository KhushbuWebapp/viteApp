import React, { useRef, useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/sidebar";
import Contact from "./components/Contact";
import Dashbord from "./components/Dashbord";
import About from "./components/About";
import Employee from "./components/Employee";
import LoginPage from "./components/LoginPage";
import TextField from "@mui/material/TextField";

function App() {
  const email = useRef();
  const password = useRef();
  const [toggleval, settoggleval] = useState(false);

  const getEmail = localStorage.getItem("Lemail");
  const getPassword = localStorage.getItem("Lpassword");
  const handlesubmit = () => {
    if (
      email.current.value == "siya123@gmail.com" &&
      password.current.value == "siya123"
    ) {
      localStorage.setItem("Lemail", "siya123@gmail.com");
      localStorage.setItem("Lpassword", "siya123");
      localStorage.setItem("role", "admin");
    }
  };

  return (
    <div>
      {getEmail && getPassword ? (
        <>
          {/* <h1>Welcome {getEmail}</h1>
          <h1>Welcome {getPassword}</h1>
          <br />
          <br /> */}
          <Box display={"flex"}>
            <Box>
              <Sidebar toggleval={toggleval} />
            </Box>
            <Box width={"100%"}>
              <Home toggleval={toggleval} settoggleval={settoggleval} />
              <Routes>
                <Route index element={<Dashbord />} />
                <Route path="/*" element={<Dashbord />} />
                <Route path="/about" element={<About />} />
                <Route path="/dashbord" element={<Contact />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Box>
          </Box>
        </>
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box>
            <h1>Welcome to the Login Page</h1>
          </Box>
          <br />
          <br />
          <Box>
            <form onSubmit={handlesubmit}>
              <label>
                Email:
                <input type="email" name="email" ref={email} />
              </label>

              <br />
              <br />
              <label>
                password:
                <input type="password" name="passworld" ref={password} />
              </label>
              <br />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </Box>
        </Box>

        // <LoginPage />
      )}
    </div>
  );
}

export default App;
