import React from "react";
import "./inventory.css";
import SearchBar from "../../../Components/SearchBar/searchBar";
import SelectField from "../../../Components/Select/select";
import { Button } from "@mui/material";
import DataTable from "../../../Components/table/table";
import PaginationRounded from "../../../Components/pagination/pagination";
import AlphabeticalOrderButton from "../../../Components/FilterButtons/Alphabatical/alphabeticalOrderButton";
import AscendingOrderButton from "../../../Components/FilterButtons/Ascending/ascendingOrderButton";
import { useNavigate } from "react-router-dom";

export default function Inventory() {
  const navigate = useNavigate();
  const addNew = () => {
    navigate("/addItem");
  };

  return (
    <div className="container">
      <div className="component-header inv-header">
        <div className="left-header">
          <h1>Inventory</h1>
          <SearchBar />
          <SelectField placeHolder={"Select Category"} />
          <SelectField placeHolder={"Select Sub-Category"} />
        </div>
        <div className="right-header">
          <Button
            style={{ backgroundColor: "seagreen", color: "white" }}
            onClick={addNew}
          >
            Add Item
          </Button>
        </div>
      </div>
      <div className="filter-bar">
        <AlphabeticalOrderButton />
        <AscendingOrderButton />
      </div>
      <div className="inventory-table">
        <DataTable />
      </div>
      <div className="pagination">
        <PaginationRounded data={5} />
      </div>
    </div>
  );
}
