import React from "react";
import "./categories.css";
import { Button } from "@mui/material";
import SearchBar from "../../../Components/SearchBar/searchBar";
import AlphabeticalOrderButton from "../../../Components/FilterButtons/Alphabatical/alphabeticalOrderButton";
import DataTable from "../../../Components/table/table";
import { useNavigate } from "react-router-dom";
import CollapsibleTable from "../../../Components/CollapseableTable/collapseTable";



export default function Categories() {
  const navigate = useNavigate();

  const addNew = () => {
    navigate("/addCategory");
  };

  return (
    <div className="container">
      <div className="component-header cat-header">
        <div className="left-header">
          <h1>Category</h1>
          <SearchBar />
        </div>
        <Button
          style={{ color: "white", backgroundColor: "seagreen" }}
          onClick={addNew}
        >
          Add Category
        </Button>
      </div>
      <div className="filter-bar">
        <AlphabeticalOrderButton />
      </div>
      <div className="category-table">
        <CollapsibleTable />
      </div>
    </div>
  );
}
