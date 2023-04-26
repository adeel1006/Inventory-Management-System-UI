import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DataTable from "../table/table";
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Button } from "@mui/material";

function createData(id, category, subCategories, vendors) {
  return {
    id,
    category,
    subCategories,
    vendors,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="center">{row.category}</TableCell>
        <TableCell align="center">{row.subCategories}</TableCell>
        <TableCell align="center">{row.vendors}</TableCell>
        <TableCell align="center">
          <>
            <Button className="add" size="small" style={{ color: "seagreen" }}>
              <AddIcon fontSize="small" />
            </Button>
            <Button className="edit" size="small" style={{ color: "orange" }}>
              <EditOutlinedIcon fontSize="small" />
            </Button>
            <Button className="delete" size="small" style={{ color: "red" }}>
              <DeleteOutlinedIcon fontSize="small" />
            </Button>
          </>
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <DataTable collapse={true} />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

const rows = [
  createData(1, "category 1", 6.0, 24),
  createData(2, "category 2", 9.0, 37),
  createData(53, "category 3", 16.0, 24),
  createData(89, "category 4", 3.7, 67),
  createData(91, "category 5", 16.0, 49),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#4583F5" }}>
            <TableCell style={{ color: "white", textAlign: "center" }}>
              ID
            </TableCell>
            <TableCell
              style={{ color: "white", textAlign: "center" }}
              align="right"
            >
              Category Name
            </TableCell>
            <TableCell
              style={{ color: "white", textAlign: "center" }}
              align="right"
            >
              Number of sub-categories
            </TableCell>
            <TableCell
              style={{ color: "white", textAlign: "center" }}
              align="right"
            >
              Number of Vendors
            </TableCell>
            <TableCell
              style={{ color: "white", textAlign: "center" }}
              align="right"
            >
              Actions
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
