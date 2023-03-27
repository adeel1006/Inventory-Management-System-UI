import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(ID, AdminName, Organization, Description, SubmissionDate, Status, Action) {
  return { ID, AdminName, Organization, Description, SubmissionDate, Status, Action };
}

const rows = [
  createData(1,'Frozen yoghurt', 159, 6.0, 24, 'Pending'),
  createData(2,'Ice cream sandwich', 237, 9.0, 37, 'Pending'),
  createData(3,'Eclair', 262, 16.0, 24, 'Pending'),
  createData(4,'Cupcake', 305, 3.7, 67, 'Pending'),
  createData(5,'Gingerbread', 356, 16.0, 20, 'Pending'),
];

export default function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor : '#4583F5'}}>
            <TableCell sx={{color: 'white'}}>ID</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>Admin Name</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>Organization</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>Description</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>Submission Date</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>Status</TableCell>
            <TableCell align="center" sx={{color: 'white'}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                {row.ID}
              </TableCell>
              <TableCell align="center">{row.AdminName}</TableCell>
              <TableCell align="center">{row.Organization}</TableCell>
              <TableCell align="center">{row.Description}</TableCell>
              <TableCell align="center">{row.SubmissionDate}</TableCell>
              <TableCell align="center">{row.Status}</TableCell>
              <TableCell align="center"><a href="#" style = {{color: '#4583F5', textDecoration: 'none'}}>view</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}