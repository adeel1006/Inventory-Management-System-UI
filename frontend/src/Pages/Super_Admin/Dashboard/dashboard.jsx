import React, { useState } from "react";
import "./dashboard.css";
import DataTable from "../../../Components/table/table";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import MyChart from "../../../Components/graph/graph";
import DataCard from "../../../Components/DataCardDashboard/dataCard";
import { OrganizationsData, AdminsData } from "../../../Constants/testProps";
import { complainTableHeader } from "../../../Constants/testProps";




export default function Dashboard() {
  const [orgTable, setOrgTable] = useState(true);

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="card-header">
          <h1>Dashboard</h1>
        </div>
        <div className="card-data">
          <DataCard
            title="Organizations"
            amount={1500}
            tagline="500 new organizations added this month"
          />
          <DataCard
            title="Admins"
            amount={3200}
            tagline="500 new admins added this month"
          />
          <DataCard
            title="Pending Complaints"
            amount={200}
            tagline="40 pending complaints this month"
            redIcon={true}
          />
          <DataCard
            title="Resolved Complaints"
            amount={3200}
            tagline="1500 complaints resolved this month"
            noBorder={true}
          />
        </div>
        <div className="card-graph">
          <div className="graph-header">
            <div className="graph-left-buttons">
              <span className="sub-heading">Analytics</span>
              <button className="rep-download chart-btn">
                <FileDownloadOutlinedIcon />
                Download Report
              </button>
            </div>
            <div className="graph-right-buttons">
              <button
                className="chart-btn swap-data-btn"
                onClick={() => setOrgTable(true)}
                style={
                  orgTable
                    ? { color: "seagreen", textDecoration: "underline" }
                    : { color: "gray", textDecoration: "none" }
                }
              >
                Organizations
              </button>
              <button
                className="chart-btn swap-data-btn"
                onClick={() => setOrgTable(false)}
                style={
                  !orgTable
                    ? { color: "seagreen", textDecoration: "underline" }
                    : { color: "gray", textDecoration: "none" }
                }
              >
                Admins
              </button>
            </div>
          </div>
          <div className="graph">
            {orgTable && <MyChart superAdmin={true} data={OrganizationsData} />}
            {!orgTable && <MyChart superAdmin={true} data={AdminsData} />}
          </div>
        </div>
        <div className="card-table">
          <div className="table-header">
            <span className="sub-heading">Recent Complaints</span>
            <a href="#" className="complaints-btn">
              See all
            </a>
          </div>
          <div className="table">
            <DataTable tableHeader = {complainTableHeader}/>
          </div>
        </div>
      </div>
    </div>
  );
}
