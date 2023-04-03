import React, { useState } from "react";
import "./orgDetails.css";
import BasicMenu from "../../../../Components/DropMenu/menu";
import BackArrow from "@mui/icons-material/KeyboardBackspaceOutlined";
import img from "../../../../assets/images/placeholder.jpg";
import { Button } from "@mui/material";
import DataTable from "../../../../Components/table/table";

export default function OrgDetails() {
  const [orgDet, setOrgDet] = useState(true);
  const [activeBtn, setActiveBtn] = useState(true);

  return (
    <div className="container">
      <div className="org-det-header">
        <Button style={{ color: "gray" }}>
          <BackArrow />
          Back
        </Button>
        <BasicMenu />
      </div>
      <div className="org-details">
        <div className="tabs">
          <button
            onClick={() => {
              setOrgDet(true);
              setActiveBtn(true);
            }}
            className="switch-btn"
            style={{
              color: !activeBtn ? "black" : "white",
              backgroundColor: !activeBtn ? "white" : "#4583F5 ",
            }}
          >
            General Information
          </button>
          <button
            onClick={() => {
              setOrgDet(false);
              setActiveBtn(false);
            }}
            className="switch-btn"
            style={{
              color: !activeBtn ? "white" : "black",
              backgroundColor: !activeBtn ? "#4583F5" : "white",
            }}
          >
            Admins
          </button>
        </div>
        {orgDet && (
          <div className="org-det-content">
            <div className="org-content-head">
              <div className="logo">
                <img src={img} alt="logo" />
              </div>
              <div className="title">
                <span className="pri-heading">Dummy Organization</span>
                <p>ugreen@hotmail.com</p>
              </div>
            </div>
            <div className="bio org-det-field">
              <span className="org-det-left">Bio</span>
              <p>
                Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                Text Dummy Text Dummy Text{" "}
              </p>
            </div>
            <div className="address org-det-field">
              <span className="org-det-left">Address</span>
              <p>
                Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                Text Dummy Text Dummy Text{" "}
              </p>
            </div>
            <div className="rep org-det-field">
              <span className="org-det-left">Representative Name</span>
              <p>
                Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                Text Dummy Text Dummy Text{" "}
              </p>
            </div>
            <div className="rep-contact org-det-field">
              <span className="org-det-left">Representative Contact</span>
              <p>
                Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy
                Text Dummy Text Dummy Text{" "}
              </p>
            </div>
          </div>
        )}
        {!orgDet && (
          <div className="org-det-admins">
            <DataTable />
          </div>
        )}
      </div>
    </div>
  );
}
