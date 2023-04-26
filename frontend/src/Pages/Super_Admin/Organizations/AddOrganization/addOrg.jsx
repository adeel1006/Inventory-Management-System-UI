import {TextField } from "@mui/material";
import React from "react";
import SelectField from "../../../../Components/Select/select";
import "./addOrg.css";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import img from "../../../../assets/images/placeholder.jpg";
import { useNavigate } from "react-router-dom";
import BackBtn from "../../../../Components/Buttons/back";
import SaveBtn from "../../../../Components/Buttons/save";
import CancelBtn from "../../../../Components/Buttons/cancel";
import { useDispatch, useSelector } from "react-redux";





export default function AddOrgPage() {
  const navigate = useNavigate();

  const save = () => {
    navigate("/orgDetails");
  };

  // Styling for MUI TextFields
  const textFieldStyle = {
    width: "32%",
  };

  return (
    <div className="container">
      <div className="new-org-header">
        <div className="left-header">
          <BackBtn />
          <h1>Add New Organization</h1>
        </div>
        <div className="right-header">
          <CancelBtn />
          <SaveBtn onClick={save} />
        </div>
      </div>
      <div className="new-org-form">
        <div className="img-upload">
          <div className="logo-upload">
            <img src={img} alt="image" />
          </div>
          <div className="heading">
            <span className="div-heading">Organization logo</span>
            <p>Upload logo with minimum resolutionof 800x800px</p>
          </div>
          <label for="upload-btn" className="upload-img-btn">
            <DriveFolderUploadIcon />
            Upload
          </label>
          <input id="upload-btn" type="file" hidden />
        </div>
        <div className="name data-field">
          <span className="form-left">Name of Organization</span>
          <TextField
            size="small"
            placeholder="Name of Organizaton"
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
        <div className="bio data-field">
          <span className="form-left">Bio</span>

          <textarea
            type="text"
            rows="8"
            placeholder="Bio"
            className="bio-field"
          ></textarea>
        </div>
        <div className="address data-field" style={{ border: "none" }}>
          <span className="form-left">Address</span>
          <div className="adrs-fields">
            <TextField
              size="small"
              type="text"
              fullWidth
              placeholder="Address"
              style={{ margin: "1% 0" }}
            />
            <TextField
              size="small"
              type="text"
              fullWidth
              placeholder="City"
              style={{ margin: "1% 0" }}
            />
            <SelectField placeHolder={"Select Country"} />
            <TextField
              size="small"
              type="text"
              fullWidth
              placeholder="Zip code"
              style={{ margin: "1% 0" }}
            />
          </div>
        </div>
        <div className="rep-name data-field">
          <span className="form-left">Representative Name</span>

          <TextField
            size="small"
            type="text"
            placeholder="Representative Name"
            style={textFieldStyle}
          />
        </div>
        <div className="rep-contact data-field">
          <span className="form-left">Representative Contact</span>

          <TextField
            size="small"
            type="text"
            placeholder="Representative Contact"
            style={textFieldStyle}
          />
        </div>
      </div>
    </div>
  );
}
