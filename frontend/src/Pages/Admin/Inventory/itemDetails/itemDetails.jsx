import React from "react";
import './itemDetails.css'
import BackBtn from "../../../../Components/Buttons/back";
import BasicMenu from "../../../../Components/DropMenu/menu";
import img from "../../../../assets/images/pp2.jpg";



export default function ItemDetails() {
  return (
    <div className="container">
      <div className="component-header">
        <div className="left-header">
          <BackBtn />
          <h1>Item Details</h1>
        </div>
        <div className="right-header">
          <BasicMenu />
        </div>
      </div>
      <div className="data-field no-border">
        <div className="data-field">
          <span className="form-left bold-txt">Email Address</span>
          <p>DUDUDUDUUDDUUDUDU</p>
        </div>
        <div className="data-field">
          <span className="form-left">Email Address</span>
          <p className="form-right">DUDUDUDUUDDUUDUDU</p>
        </div>
      </div>
      <div className="data-field">
        <span className="form-left bold-txt">Description</span>
        <p style={{ width: "60%" }}>
          DUDUDUDUUDDUUDUDUDUUDUDUDUDUDUDUUDDUUDUDUDUDUDUDUUDDUUDUDU
        </p>
      </div>
      <div className="data-field">
        <span className="form-left bold-txt">Category</span>
        <p style={{ width: "60%" }}>DUDUDUUDDUUDUDU</p>
      </div>
      <div className="data-field">
        <span className="form-left bold-txt">Sub-Category</span>
        <p style={{ width: "60%" }}>DUUDDUUDUDU</p>
      </div>
      <div className="data-field">
        <span className="form-left bold-txt">Purchase Date</span>
        <p style={{ width: "60%" }}>UUDUDU</p>
      </div>
      <div className="data-field">
        <span className="form-left bold-txt">Unit Price</span>
        <p style={{ width: "60%" }}>DDUUDUDU</p>
      </div>
      <div className="data-field no-border">
        <div className="data-field">
          <span className="form-left bold-txt">Depricated Price</span>
          <p style={{ width: "60%" }}>RS 54000</p>
        </div>
        <div className="data-field">
          <span className="form-left bold-txt">Percentage Deprication</span>
          <p style={{ width: "60%" }}>30%</p>
        </div>
      </div>
      <span className="div-heading">Vendor</span>
      <div className="data-field">
        <span className="form-left bold-txt">Name</span>
        <p style={{ width: "60%" }}>UUDUDU</p>
      </div>
      <div className="data-field">
        <span className="form-left bold-txt">Contact Number</span>
        <p style={{ width: "60%" }}>UUDUDU</p>
      </div>

      <span className="div-heading">Assigned to:</span>
      <div className="user-card">
        <div className="pfp">
          <img src={img} alt="pfp" />
        </div>
        <div className="details">
          <span className="div-heading">Ann Torf</span>
          <span className="dept">Department: Development</span>
          <span className="email">dummy@gmail.com</span>
          <span className="contact">+1234567891</span>
        </div>
      </div>
    </div>
  );
}
