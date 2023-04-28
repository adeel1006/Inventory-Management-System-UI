import React, { useEffect } from "react";
import "./admins.css";
import SearchBar from "../../../../Components/SearchBar/searchBar";
import SelectField from "../../../../Components/Select/select";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import DataTable from "../../../../Components/table/table";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminTableHeader } from "../../../../Constants/testProps";
import { getAdmins } from "../../../../Redux/Users/userActions";
import { userHandler } from "../../../../Redux/Users/userReducer";

export default function Admins() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.userHandler.adminData);
  
  console.log(data);

  const addNew = () => {
    navigate("/newAdmin");
  };

  useEffect(() => {
    dispatch(getAdmins());
  }, []);

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
          <DataTable tableHeader={adminTableHeader} data={data} />
        </div>
      </div>
    </div>
  );
}
