import { Button } from "@mui/material";
import React from "react";
import './complaintDetails.css'
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import img from "../../../../assets/images/placeholder.jpg";

export default function ComplaintDetails() {
  return (
    <div className="container">
      <div className="component-header">
        <div className="left-header-content">
          <Button style={{color: 'gray'}}><BackArrow/>Back</Button>
          <h1>Complaint ID : 1234</h1>
          <div className="status">Pending</div>
        </div>
        <div className="right-header-content">
          <Button style={{backgroundColor: 'seagreen', color: 'white'}}>Mark as resolved</Button>
        </div>
      </div>
      <div className="complaint-info">
        <div className="description-heading">Description</div>
        <div className="complaint-content">
          <p className="description-content" style={{textAlign: 'justify'}}>
            Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text
            Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text
            Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text
            Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text
            Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text
            Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text
            Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text
            Dummy text Dummy text Dummy text Dummy text Dummy text Dummy text
          </p>
          <span>Attachments</span>
          <div className="attachment-images">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
      <div className="complain-by">
        <span className="cmp-heading">Complaint Submitted By</span>
        <div className="admin-info">
        <div className="profile-pic">
          <img src={img} alt="profile pic " />
        </div>
        <div className="admin-details">
          <span className="pri-heading" style={{fontSize: '1.7em'}}>Dummy Admin</span>
          <p className="gray-text">dummy@gmail.com</p>
          <p className="gray-text">+12345678910</p>
        </div>
      </div>
      </div>
      <div className="complain-by-org">
        <span className="cmp-heading">Organization</span>
        <div className="admin-info">
        <div className="profile-pic">
          <img src={img} alt="profile pic " />
        </div>
        <div className="admin-details">
          <span className="pri-heading" style={{fontSize: '1.7em'}}>Dummy Organization</span>
          <p className="gray-text">dummy@gmail.com</p>
        </div>
      </div>
      </div>
    </div>
  );
}
