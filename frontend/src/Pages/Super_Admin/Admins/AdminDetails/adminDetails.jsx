import { Button } from "@mui/material";
import React from "react";
import "./adminDetails.css";
import BasicMenu from "../../../../Components/DropMenu/menu";
import img from "../../../../assets/images/placeholder.jpg";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";


function AdminDetails() {
  return (
    <div className="container">
      <div className="details-header component-header">
        <div className="left-header-content">
          <Button style = {{color: 'gray'}}><BackArrow/>BAck</Button>
          <h1>Admin Details</h1>
        </div>
        <div className="right-header-content">
          <BasicMenu />
        </div>
      </div>
      <div className="admin-info">
        <div className="profile-pic">
          <img src={img} alt="profile pic " />
        </div>
        <div className="admin-details">
          <span className="pri-heading">Dummy Admin</span>
          <p className="gray-text">dummy@gmail.com</p>
          <p className="gray-text">+12345678910</p>
        </div>
      </div>
      <div className="admin-organization">
        <span style = {{margin: '2% 0', fontSize: 'larger'}}>Organization</span>
        <div className="admin-organization">
          <div className="org-content-head no-border">
            <div className="profile-pic">
              <img src={img} alt="logo" />
            </div>
            <div className="title">
              <span className="pri-heading">Dummy Organization</span>
              <p>ugreen@hotmail.com</p>
            </div>
          </div>
          <div className="no-border org-det-field">
            <span className="org-det-left">Representative Name</span>
            <p style={{width : '60%'}}>
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              Dummy Text Dummy Text{" "}
            </p>
          </div>
          <div className="rep-contact org-det-field ">
            <span className="org-det-left">Representative Contact</span>
            <p style={{width : '60%'}}>
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              Dummy Text Dummy Text{" "}
            </p>
          </div>
          <div className="no-border org-det-field">
            <span className="org-det-left">Bio</span>
            <p style={{width : '60%'}}>
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              Dummy Text.
            </p>
          </div>
          <div className="no-border org-det-field">
            <span className="org-det-left">Address</span>
            <p style={{width : '60%'}}>
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              Dummy Text Dummy Text{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDetails;
