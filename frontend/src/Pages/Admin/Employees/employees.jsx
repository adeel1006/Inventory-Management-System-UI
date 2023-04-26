import React from 'react'
import './employees.css'
import SearchBar from '../../../Components/SearchBar/searchBar'
import SelectField from '../../../Components/Select/select'
import { Button } from '@mui/material'
  import AlphabeticalOrderButton from '../../../Components/FilterButtons/Alphabatical/alphabeticalOrderButton'
import DataTable from '../../../Components/table/table'
import PaginationRounded from '../../../Components/pagination/pagination'
import { useNavigate } from 'react-router-dom'



export default function Employees() {

  const navigate = useNavigate();

  const addEmployee = () => {
    navigate('/addEmployee')
  }
  



  return (
    <div className='container'>
      <div className="component-header emp-header">
        <div className="left-header">
          <h1>Employees</h1>
          <SearchBar/>
          <SelectField placeHolder = {'Select Department'}/>
        </div>
        <div className="right-header">
          <Button style = {{backgroundColor: 'seagreen', color: 'white'}} onClick={addEmployee}>Add Employee</Button>
        </div>
      </div>
      <div className="filter-bar" style = {{justifyContent: 'flex-end', padding: '01% .5%'}}>
        <AlphabeticalOrderButton/>
      </div>
      <div className="emp-table">
        <DataTable/>
      </div>
      <div className="pagination">
          <PaginationRounded data={5} />
        </div>
    </div>
  )
}
