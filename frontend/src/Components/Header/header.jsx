import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/images/logo.png";
import pp from "../../assets/images/pp.jpeg";
import './header.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="header-container">
          <div className="pages-header">
            <div className="logo-header">
              <img src={logo} alt="logo"/>
            </div>
            <div className="pages-list">
              <a href="/dashboard" className="page-btn">Dashboard</a>
              <a href="/organizations" className="page-btn">Organizations</a>
              <a href="#" className="page-btn">Admins</a>
              <a href="#" className="page-btn">Complaints</a>
            </div>
          </div>
          <div className="user-profile-header">
            <div className="image-header">
            <img src={pp} alt="profilePic" />
            </div>
            <button>Super Admin <ExpandMoreIcon/></button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
