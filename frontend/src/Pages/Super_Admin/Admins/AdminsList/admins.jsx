import React from "react";
import "./admins.css";
import SearchBar from "../../../../Components/SearchBar/searchBar";
import SelectField from "../../../../Components/Select/select";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import DataTable from "../../../../Components/table/table";
import { useNavigate } from "react-router-dom";

export default function Admins() {
  const navigate = useNavigate();
  const addNew = () => {
    navigate("/newAdmin");
  };
  return (
    <div>
      <div className="adm-container">
        <div className="adm-header">
          <div className="adm-left-header">
            <h1>Admins</h1>
            <SearchBar />
            <SelectField placeHolder={"Select location"} />
          </div>
          <div className="adm-right-header">
            <Button
              style={{ color: "white", backgroundColor: "seagreen" }}
              onClick={addNew}
            >
              <AddIcon />
              Add
            </Button>
          </div>
        </div>
        <div className="adm-table">
          <DataTable />
        </div>
      </div>
    </div>
  );
}
