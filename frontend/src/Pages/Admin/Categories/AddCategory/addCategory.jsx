import React, { useState } from "react";
import "./addCategory.css";
import { Button, TextField } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function AddCategory() {
  const [counter, setCounter] = useState(1);

  const addSubCategory = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div className="container">
      <div className="component-header new-category-header">
        <div className="left-header">
          <Button style={{color: 'gray'}}>
            <KeyboardBackspaceIcon fontSize="small"/>
            Back
          </Button>
          <h1>Add New Category</h1>
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
          <span className="form-left">Category Name</span>
          <TextField
            size="small"
            placeholder="Category Name"
            style={{ width: "32%" }}
          ></TextField>
        </div>
        <span className="sub-heading">Sub-Categories</span>
        {Array.from(Array(counter)).map((index, count) => {
          return (
            <div className="data-field no-border" key={index}>
              <span className="form-left">Sub-Category #{count + 1}</span>
              <TextField
                size="small"
                placeholder="Enter Sub-Category"
                style={{ width: "32%" }}
              ></TextField>
            </div>
          );
        })}
        <Button
          onClick={addSubCategory}
          style={{ color: "white", backgroundColor: "seagreen" }}
        >
          Add Sub-Categoey
        </Button>
      </form>
    </div>
  );
}
