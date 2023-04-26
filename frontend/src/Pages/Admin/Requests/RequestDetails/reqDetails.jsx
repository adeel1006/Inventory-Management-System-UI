import React from "react";
import BackBtn from "../../../../Components/Buttons/back";
import { Button } from "@mui/material";
import img from "../../../../assets/images/pp2.jpg";

export default function ReqDetails() {
  return (
    <div className="container">
      <div className="component-header">
        <div
          className="left-header"
          style={{ width: "35%", justifyContent: "space-between" }}
        >
          <BackBtn />
          <h1>Request</h1>
          <div className="status">Pending</div>
          <div className="date">Submission date : 11/12/23</div>
        </div>
        <div className="right-header">
          <Button style={{ backgroundColor: "red", color: "white" }}>
            Reject
          </Button>
          <Button style={{ backgroundColor: "seagreen", color: "white" }}>
            Accept
          </Button>
        </div>
      </div>
      <div className="data-field border-top">
        <span className="form-left bold-txt">Description</span>
        <p style={{ width: "60%" }}>
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum.
        </p>
      </div>
      <div className="data-field">
        <span className="form-left bold-txt">Item Name</span>
        <p>Keyboard</p>
      </div>
      <div className="data-field">
        <span className="form-left bold-txt">Category</span>
        <p>+1234567891</p>
      </div>
      <div className="data-field">
        <span className="form-left bold-txt">Sub-Category</span>
        <p>+1234567891</p>
      </div>
      <span className="div-heading">Request By</span>
      <div className="user-card" style={{padding: '3% 0'}}>
        <div className="pfp">
          <img src={img} />
        </div>
        <div className="details">
          <span className="div-heading">Dummy User</span>
          <span className="dept">Department: Development</span>
          <span className="email">dummy@gmail.com</span>
          <span className="contact">+1234567891</span>
        </div>
      </div>
    </div>
  );
}
