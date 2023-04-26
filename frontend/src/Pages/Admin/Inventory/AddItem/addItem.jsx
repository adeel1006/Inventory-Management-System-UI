import React from "react";
import "./addItem.css";
import { TextField, Button } from "@mui/material";
import SelectField from "../../../../Components/Select/select";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

export default function AddItem() {

  const navigate = useNavigate();

  const details = () => {
    navigate('/itemDetails')
  }




  return (
    <div className="container">
      <div className="component-header new-item-header">
        <div className="left-header">
          <Button>
            <KeyboardBackspaceIcon />
            Back
          </Button>
          <h1>Add New Item</h1>
        </div>
        <div className="right-header">
          <Button style={{color: 'gray', backgroundColor: '#EEEFF1'}}>Cancel</Button>
          <Button style={{color: 'white', backgroundColor: 'seagreen'}} onClick={details}>Save</Button>
        </div>
      </div>
      <form action="">
        <div className="data-field">
          <span className="form-left">Item Name</span>
          <TextField
            size="small"
            placeholder="Item Name"
            style={{ width: "32%" }}
          ></TextField>
        </div>
        <div className="data-field">
          <span className="form-left">Serial Number</span>
          <TextField
            size="small"
            placeholder="Enter serial number"
            style={{ width: "32%" }}
          ></TextField>
        </div>
        <div className="data-field">
          <span className="form-left">Description</span>
          <textarea
            type="text"
            rows="8"
            placeholder="Description"
            className="bio-field"
          ></textarea>
        </div>
        <div className="data-field">
          <span className="form-left">Category</span>
          <SelectField placeHolder={"Select Category"} />
        </div>
        <div className="data-field">
          <span className="form-left">Sub-category</span>
          <SelectField placeHolder={"Select Sub-category"} />
        </div>
        <div className="data-field">
          <span className="form-left">Price</span>
          <TextField
            size="small"
            placeholder="price"
            style={{ width: "32%" }}
          ></TextField>
        </div>
        <div className="data-field">
          <span className="form-left">Vendor</span>
          <SelectField placeHolder={"Select vendor"} />
        </div>
      </form>
    </div>
  );
}
