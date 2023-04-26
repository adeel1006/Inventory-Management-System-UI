import React from "react";
import BackBtn from "../../../../Components/Buttons/back";
import SaveBtn from "../../../../Components/Buttons/save";
import CancelBtn from "../../../../Components/Buttons/cancel";
import UploadBtn from "../../../../Components/Buttons/upload";
import img from "../../../../assets/images/placeholder.jpg";
import { TextField } from "@mui/material";
import SelectField from "../../../../Components/Select/select";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
  const navigate = useNavigate();

  const empDetails = () => {
    navigate("/employeeDetails");
  };

  return (
    <div className="container">
      <div className="component-header">
        <div className="left-header">
          <BackBtn />
          <h1>Add New Employee</h1>
        </div>
        <div className="right-header">
          <CancelBtn />
          <SaveBtn onClick={empDetails} />
        </div>
      </div>
      <form action="">
        <div className="img-upload">
          <div className="logo-upload">
            <img src={img} alt="image" />
          </div>
          <div className="heading">
            <span className="div-heading">Admin's Picture</span>
            <p>Upload a high res picture with clear face</p>
          </div>
          <UploadBtn />
        </div>
        <div className="data-field">
          <span className="form-left">Name</span>
          <TextField
            size="small"
            placeholder="Full Name"
            style={{ width: "32%" }}
          ></TextField>
        </div>
        <div className="data-field">
          <span className="form-left">Email Address</span>
          <TextField
            size="small"
            placeholder="Email Address"
            style={{ width: "32%" }}
          ></TextField>
        </div>
        <div className="data-field">
          <span className="form-left">Contact Number</span>
          <TextField
            size="small"
            placeholder="Contact Number"
            style={{ width: "32%" }}
          ></TextField>
        </div>
        <div className="data-field">
          <span className="form-left">Department</span>
          <SelectField placeHolder={"Select Department"} />
        </div>
        <span className="div-heading">Admin's Picture</span>
        <p>
          Below are the one time created credentials. These will be sent to the
          mentioned emails.
        </p>
        <div className="data-field no-border">
          <span className="form-left">Email Address</span>
          <TextField
            size="small"
            placeholder="Email Address"
            style={{ width: "32%" }}
          ></TextField>
        </div>
        <div className="data-field">
          <span className="form-left">Password</span>
          <TextField
            size="small"
            placeholder="Password"
            style={{ width: "32%" }}
          ></TextField>
        </div>
      </form>
    </div>
  );
}
