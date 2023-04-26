import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PaginationRounded from "../pagination/pagination";

export default function DataTable(props) {
  const [page, setPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);

  return (
    <div className="table-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={
                props.collapse
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "#4583F5" }
              }
            >
              {props.tableHeader?.map((heading) => {
                return (
                  <TableCell
                    align="center"
                    sx={
                      props.collapse ? { color: "#4583F5" } : { color: "white" }
                    }
                  >
                    {heading}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data
              ?.slice(
                (page - 1) * dataPerPage,
                (page - 1) * dataPerPage + dataPerPage
              )
              .map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell align="center" component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.contact}</TableCell>
                  <TableCell align="center">
                    <a
                      href="#"
                      style={{ color: "#4583F5", textDecoration: "none" }}
                    >
                      view
                    </a>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination">
        <PaginationRounded
          data={props.data?.length}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
