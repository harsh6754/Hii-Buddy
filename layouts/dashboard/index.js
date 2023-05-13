//import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
//import Logo from "../../assets/Images/logo.ico"
//import { Nav_Buttons } from "../../data";
//import { Gear } from "phosphor-react";
//import { faker } from "@faker-js/faker";
//import useSettings from "../../hooks/useSettings"
import SideBar from "./SideBar";
const DashboardLayout = () => {
  return (
    <Stack direction="row">
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
