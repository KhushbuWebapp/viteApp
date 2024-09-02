import React, { useRef } from "react";

import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Label } from "@mui/icons-material";
const LoginPage = () => {
  const email = useRef();
  const password = useRef();
  const handlesubmit = (e) => {
    // e.preventDefault();
    console.log("done...");
    if (
      email.current.value == "siya123@gmail.com" &&
      password.current.value == "siya123"
    ) {
      localStorage.setItem("Lemail", "siya123@gmail.com");
      localStorage.setItem("Lpassword", "siya123");
    }
  };
  return (
    <>
      <Box component="section" className="text-gray-600 body-font">
        <Box className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Box className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://img.freepik.com/premium-vector/young-businesswoman-working-laptop-cartoon-illustration_56104-525.jpg"
            />
            <Box className="bg-white relative flex flex-wrap py-6 rounded">
              <Box className="lg:w-full px-6 text-center">
                <Typography
                  variant="h2"
                  className="title-font font-semibold text-gray-900 tracking-widest text-lg"
                >
                  Connect with every application.
                </Typography>
                <Box component="p" className="mt-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                  nostrum nisi nesciunt!
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-start text-start">
            <Box className=" flex justify-center items-center w-full mb-20">
              <img src="./unikwork.png" height={30} width={200} alt="" />
            </Box>

            <Typography
              variant="h1"
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
            >
              Sing in
            </Typography>
            <Box component="p" className="mb-8 leading-relaxed">
              Please enter you login Details below
            </Box>
            <Box className="flex w-full md:justify-start justify-center items-end">
              <Box
                component="form"
                className="relative mr-4 lg:w-full xl:w-full w-full"
                onSubmit={handlesubmit}
              >
                {/* <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email Address
                </label> */}
                <TextField
                  fullWidth
                  // placeholder="Your email"
                  id="email"
                  label="Email Address"
                  name="email"
                  ref={email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {/* <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label> */}

                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  ref={password}
                  // placeholder="Enter password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    marginTop: "2rem",
                  }}
                  fullWidth
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
