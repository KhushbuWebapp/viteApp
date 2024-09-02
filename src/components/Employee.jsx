import { Box } from "@mui/material";
import React from "react";
import Product from "./Product";

const Employee = () => {
  return (
    <div>
      <Box className="p-4">
        <Product title="Lorem Lpsum" />
        <Product title="Lorem Lpsum" />
        <Product title="Lorem Lpsum" />
        <Product title="Lorem Lpsum" />
      </Box>
    </div>
  );
};

export default Employee;
