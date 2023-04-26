import React, { useState } from "react";
import "./empDetails.css";
import BackBtn from "../../../../Components/Buttons/back";
import BasicMenu from "../../../../Components/DropMenu/menu";
import img from "../../../../assets/images/pp2.jpg";
import DataTable from "../../../../Components/table/table";

export default function EmpDetails() {
  const [genInfo, setGenInfo] = useState(true);
  const [invTab, setInvTab] = useState(false);
  const [reqTab, setReqTab] = useState(false);

  return (
    <div className="container">
      <div className="component-header">
        <div className="left-header">
          <BackBtn />
        </div>
        <div className="right-header">
          <BasicMenu />
        </div>
      </div>
      <div className="content">
        <div className="left-content">
          <button
          style = {genInfo ? {color: 'white', backgroundColor : '#4583F5'} : {color : 'black'}}
            onClick={() => {
              setGenInfo(true);
              setInvTab(false);
              setReqTab(false);
            }}
            className="toggle-btn"
          >
            General Information
          </button>
          <button
          style = {invTab ? {color: 'white', backgroundColor : '#4583F5'} : {color : 'black'}}
            onClick={() => {
              setGenInfo(false);
              setInvTab(true);
              setReqTab(false);
            }}
            className="toggle-btn"
          >
            Inventory
          </button>
          <button
          style = {reqTab ? {color: 'white', backgroundColor : '#4583F5'} : {color : 'black'}}
            onClick={() => {
              setGenInfo(false);
              setInvTab(false);
              setReqTab(true);
            }}
            className="toggle-btn"
          >
            Requests
          </button>
        </div>
        <div className="right-content">
          {genInfo &&<>
            <div className="user-card">
              <div className="pfp">
                <img src={img} alt="pfp" />
              </div>
              <div className="details">
                <span className="div-heading">Dummy User</span>
              </div>
            </div>
            <div className="data-field border-top">
              <span className="form-left bold-txt">Email Address</span>
              <p>dummyuser@gmail.com</p>
            </div>
            <div className="data-field">
              <span className="form-left bold-txt">Contact Number</span>
              <p>+1234567891</p>
            </div>
            <div className="data-field">
              <span className="form-left bold-txt">Department</span>
              <p>Develoment</p>
            </div>
          </>}
          <>
            {invTab && <div className="inventory-table">
              <DataTable />
            </div>}
          </>
          <>
            {reqTab && <div className="request-table">
              <DataTable />
            </div>}
          </>
        </div>
      </div>
    </div>
  );
}
