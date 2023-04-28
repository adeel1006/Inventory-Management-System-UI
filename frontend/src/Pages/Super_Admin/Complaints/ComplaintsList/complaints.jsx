
import "./complaints.css";
import SearchBar from "../../../../Components/SearchBar/searchBar";
import SelectField from "../../../../Components/Select/select";
import { Button } from "@mui/material";
import DataTable from "../../../../Components/table/table";
import { useNavigate } from "react-router-dom";
import { complainTableHeader } from "../../../../Constants/testProps";



export default function Complaints() {
  const navigate = useNavigate();

  const save = () => {
    navigate("/complaintDetails");
  };
  return (
    <div>
      <div className="cmp-container">
        <div className="cmp-header">
          <div className="cmp-left-header">
            <h1>Complaints</h1>
            <SearchBar />
            <SelectField placeHolder={"Select location"} />
            <SelectField placeHolder={"Select satus"} />
          </div>
          <div className="cmp-right-header">
            <Button
              style={{ color: "white", backgroundColor: "seagreen" }}
              onClick={save}
            >
              Details
            </Button>
          </div>
        </div>
        <div className="cmp-table">
          <DataTable tableHeader = {complainTableHeader}/>
        </div>
      </div>
    </div>
  );
}
