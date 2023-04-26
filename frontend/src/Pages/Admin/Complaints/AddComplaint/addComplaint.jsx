import React from "react";
import "./addComplaint.css";
import BackBtn from "../../../../Components/Buttons/back";
import CancelBtn from "../../../../Components/Buttons/cancel";
import SaveBtn from "../../../../Components/Buttons/save";
import UploadBtn from "../../../../Components/Buttons/upload";
import img from '../../../../assets/images/placeholder.jpg'


export default function AddComplaint() {
  return (
    <div className="container">
      <div className="component-header">
        <div className="left-header">
          <BackBtn />
          <h1>Add New Complaint</h1>
        </div>
        <div className="right-header">
          <CancelBtn />
          <SaveBtn />
        </div>
      </div>
      <form action="">
        <div className="data-field border-top">
          <span className="form-left">Description</span>
          <textarea
            type="text"
            rows="8"
            placeholder="Description"
            className="bio-field"
          ></textarea>
        </div>
        <div className="data-field">
          <span className="form-left">Image</span>
          <div className="image-upload-container">
            <div className="image-container">
                <img src={img} alt="placeholder"/>
            </div>
            <UploadBtn/>
          </div>
        </div>
      </form>
    </div>
  );
}
