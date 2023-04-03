import { Button, Select, TextField } from "@mui/material";
import React from "react";
import SelectField from "../../../../Components/Select/select";
import "./addAdmin.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import img from '../../../../assets/images/placeholder.jpg'
import { useNavigate } from "react-router-dom";

export default function AddAdmin() {

  const navigate = useNavigate();

  // Styling for MUI TextFields
  const textFieldStyle = {
    width: "32%",
  };

  const saveAdmin = () => {
    navigate('/adminDetails');
  }

  return (
    <div className="container">
      <div className="new-adm-header">
        <div className="left-btns header-adm-btns">
          <button className="back-btn">
            <KeyboardBackspaceIcon fontSize="small" />
            Back
          </button>
          <h1>Add New Admin</h1>
        </div>
        <div className="right-btns header-adm-btns">
          <button className="cancel-btn btn">Cancel</button>
          <button className="save-btn btn" onClick={saveAdmin}>Save</button>
        </div>
      </div>
      <div className="new-adm-form">
        <div className="img-upload">
          <div className="logo-upload">
            <img src={img} alt="image" />
          </div>
          <div className="heading">
            <span className="div-heading">Admin's Picture</span>
            <p>Upload a high res picture with clear face</p>
          </div>
          <label for="upload-btn" className="upload-img-btn">
            <DriveFolderUploadIcon />
            Upload
          </label>
          <input id="upload-btn" type="file" hidden />
        </div>
        <div className="name data-field">
          <span className="form-left">Name</span>
          <TextField
            size="small"
            placeholder="Name of the Admin"
            style={textFieldStyle}
          ></TextField>
        </div>
        <div className="email data-field">
          <span className="form-left">Email Address</span>

          <TextField
            size="small"
            placeholder="Email Address"
            style={textFieldStyle}
          />
        </div>
    
        <div className="org-name data-field">
        <span className="form-left">Organization Name</span>    
            <SelectField placeHolder={"Select Organization"} />
        </div>
          
        
        <div className="contact data-field">
          <span className="form-left">Contact Number</span>
          <TextField
            size="small"
            type="text"
            placeholder="Contact Number"
            style={textFieldStyle}
          />
        </div>
        <div className="credentials">
          <span className="div-heading">Credentials</span>
          <p>
            Below are the one time created credentials. These will be sent to
            the mentioned emails
          </p>
          <div className="crd-email data-field" style={{ border: "none" }}>
            <span className="form-left">Email Address</span>

            <TextField
              size="small"
              type="text"
              placeholder="Email Address"
              style={textFieldStyle}
            />
          </div>
          <div className="crd-password data-field" style={{ border: "none" }}>
            <span className="form-left">Password</span>

            <TextField
              size="small"
              type="text"
              placeholder="Password"
              style={textFieldStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
