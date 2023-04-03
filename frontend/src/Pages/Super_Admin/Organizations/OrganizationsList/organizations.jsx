import React from "react";
import "./organizations.css";
import SearchBar from "../../../../Components/SearchBar/searchBar";
import SelectField from "../../../../Components/Select/select";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import DataTable from "../../../../Components/table/table";
import PaginationRounded from "../../../../Components/pagination/pagination";
import { useNavigate } from "react-router-dom";

export default function Organizations() {
  const navigate = useNavigate();

  const addNewOrg = () => {
    navigate("/newOrg");
  };
  return (
    <div>
      <div className="org-container">
        <div className="org-header">
          <div className="org-left-header">
            <h1>Organizations</h1>
            <SearchBar />
            <SelectField placeHolder={"Select location"} />
          </div>
          <div className="org-right-header">
            <Button
              style={{ color: "white", backgroundColor: "seagreen" }}
              onClick={addNewOrg}
            >
              <AddIcon />
              Add
            </Button>
          </div>
        </div>
        <div className="org-table">
          <DataTable />
        </div>
        <div className="pagination">
          <PaginationRounded data={5} />
        </div>
      </div>
    </div>
  );
}
