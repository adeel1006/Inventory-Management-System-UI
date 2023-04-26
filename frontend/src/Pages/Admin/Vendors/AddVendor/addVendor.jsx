import React from "react";
import { TextField, Button } from "@mui/material";
import SelectField from "../../../../Components/Select/select";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import './addVendor.css'



export default function AddVendor() {
  return (
    <div className="container">
      <div className="component-header new-vendor-header">
        <div className="left-header">
          <Button style={{ color: "gray" }}>
            <KeyboardBackspaceIcon fontSize="small" />
            Back
          </Button>
          <h1>Add New Vendor</h1>
        </div>
        <div className="right-header">
          <Button style={{ color: "gray", backgroundColor: "#EEEFF1" }}>
            Cancel
          </Button>
          <Button style={{ color: "white", backgroundColor: "seagreen" }}>
            Save
          </Button>
        </div>
      </div>
      <form action="">
        <div className="data-field border-top">
          <span className="form-left">Name</span>
          <TextField
            size="small"
            placeholder="Full Name"
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
          <span className="form-left">Category</span>
          <SelectField placeHolder={"Select Category"} />
        </div>
        <div className="data-field">
          <span className="form-left">Sub-Category</span>
          <SelectField placeHolder={"Select Sub-Category"} />
        </div>
      </form>
    </div>
  );
}
