import React, { useState } from "react";
import "./AdminComplaints.css";
import SearchBar from "../../../Components/SearchBar/searchBar";
import SelectField from "../../../Components/Select/select";
import DataTable from "../../../Components/table/table";
import AlphabeticalOrderButton from "../../../Components/FilterButtons/Alphabatical/alphabeticalOrderButton";
import PaginationRounded from "../../../Components/pagination/pagination";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AdminComplaints() {
  const navigate = useNavigate();

  const addNewCOmplaint = () => {
    navigate("/addComplaint");
  };

  const submittedfalse = {
    color: "white",
    backgroundColor: "#4583F5",
  };
  const submittedTrue = {
    color: "black",
    backgroundColor: "white",
  };
  const [submitted, setSubmitted] = useState(false);

  const toggleTableTrue = () => {
    setSubmitted(true);
  };
  const toggleTableFalse = () => {
    setSubmitted(false);
  };
  return (
    <div className="container">
      <div className="component-header cmp-header">
        <div className="left-header">
          <h1>Complaints</h1>
          <SearchBar />
          <SelectField placeHolder={"Select Staus"} />
        </div>
        <div className="right-header">
          <AlphabeticalOrderButton />
          {submitted && (
            <Button
              style={{
                backgroundColor: "seagreen",
                color: "white",
                marginLeft: "5%",
              }}
              onClick={addNewCOmplaint}
            >
              Create Complaint
            </Button>
          )}
        </div>
      </div>
      <div className="admin-cmp-body">
        <div className="cmp-left-toggle">
          <button
            className="toggle-btn"
            onClick={() => setSubmitted(false)}
            style={!submitted ? submittedfalse : submittedTrue}
          >
            Employees
          </button>
          <button
            className="toggle-btn"
            onClick={() => setSubmitted(true)}
            style={submitted ? submittedfalse : submittedTrue}
          >
            Submitted
          </button>
        </div>
        {!submitted && (
          <div className="cmp-right-table">
            <DataTable />
            <div className="pagination">
              <PaginationRounded data={5} />
            </div>
          </div>
        )}
        {submitted && (
          <div className="cmp-right-table">
            <DataTable />
            <div className="pagination">
              <PaginationRounded data={5} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
