import React from "react";
import "./dashboard.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUpRounded";
import DataTable from "../../../Components/table/table";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MyChart from "../../../Components/graph/graph";

export default function dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="card-header">
          <h1>Dashboard</h1>
        </div>
        <div className="card-data">
          <div className="org-data data">
            <span className="sub-heading">
              organizations
            </span>
            
            <div className="data-figure">
              <span className = 'pm-heading'>1500</span>
              <ArrowDropUpIcon style={{ fontSize: "2em", color: "green" }} />
            </div>
            <span className="gray-txt">
            XX new this month
            </span>
            
          </div>
          <div className="admin-data data">
          <span className="sub-heading">
            Admins
            </span>
            <div className="data-figure">
              <span className = 'pm-heading'>2500</span>
              <ArrowDropUpIcon style={{ fontSize: "2em", color: "green" }} />
            </div>
            <span className="gray-txt">
            XX new this month
            </span>
          </div>
          <div className="pen-data data">
          <span className="sub-heading">
          Pending Complaints
          </span>
            
            <div className="data-figure">
              <span className = 'pm-heading'>200</span>
              <ArrowDropUpIcon style={{ fontSize: "2em", color: "red" }} />
            </div>
            <span className="gray-txt">
            XX new this month
            </span>
          </div>
          <div className="res-data data d4" >
          <span className="sub-heading">
            Resolved complaints
            </span>
            <div className="data-figure">
              <span className = 'pm-heading'>15000</span>
              <ArrowDropUpIcon style={{ fontSize: "2em", color: "green" }} />
            </div>
            <span className="gray-txt">
            XX new this month
            </span>
            
          </div>
        </div>
        <div className="card-graph">
          <div className="graph-header">
            <div className="graph-left-buttons">
            <span className="sub-heading">
              Analytics
              </span>
              <button className="rep-download chart-btn">
                <FileDownloadOutlinedIcon />
                Download Report
              </button>
            </div>
            <div className="graph-right-buttons">
              <button className="chart-btn swap-data-btn">Organizations</button>
              <button className="chart-btn swap-data-btn">Admins</button>
            </div>
          </div>
          <div className="graph">
            <MyChart />
          </div>
        </div>
        <div className="card-table">
          <div className="table-header">
          <span className="sub-heading">
            Recent Complaints
            </span>
            <a href="#" className="complaints-btn">See all</a>
          </div>
          <div className="table">
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
}
