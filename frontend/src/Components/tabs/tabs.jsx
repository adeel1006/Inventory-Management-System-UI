import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useNavigate } from "react-router-dom";

export default function LabTabs(props) {
  const [value, setValue] = React.useState("/dashboard");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      {props.user === "superadmin" && (
        <TabContext value={value}>
          <Box sx={{}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Dashboard" value="/dashboard" />
              <Tab label="Organizations" value="/organizations" />
              <Tab label="Admins" value="/admins" />
              <Tab label="Complaints" value="/complaints" />
            </TabList>
          </Box>
        </TabContext>
      )}
      {props.user === "admin" && (
        <TabContext value={value}>
          <Box sx={{}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Dashboard" value="/dashboard" />
              <Tab label="Inventory" value="/inventory" />
              <Tab label="Categories" value="/categories" />
              <Tab label="Employees" value="/employees" />
              <Tab label="Requests" value="/requests" />
              <Tab label="Returns" value="/returns" />
              <Tab label="Complaints" value="/complaints" />
              <Tab label="Vendors" value="/vendors" />
            </TabList>
          </Box>
        </TabContext>
      )}
    </Box>
  );
}
