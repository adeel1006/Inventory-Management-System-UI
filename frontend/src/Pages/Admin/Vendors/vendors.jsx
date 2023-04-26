import React from 'react'
import './vendors.css'
import DataTable from '../../../Components/table/table'
import SearchBar from '../../../Components/SearchBar/searchBar'
import SelectField from '../../../Components/Select/select'
import PaginationRounded from '../../../Components/pagination/pagination'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'



export default function Vendors() {

  const navigate = useNavigate();

  const addNewVendor = () => {
    navigate('/addVendor')
  }



  return (
    <div className='container'>
      <div className="component-header vendor-header">
        <div className="left-header">
          <h1>Vendors</h1>
          <SearchBar/>
          <SelectField placeHolder = {'Select Category'}/>
          <SelectField placeHolder = {'Select Sub-Category'}/>
        </div>
        <div className="right-header">
          <Button style = {{color: 'white', backgroundColor: 'seagreen'}} onClick={addNewVendor}>Add Vendor</Button>
        </div>
      </div>
      <div className="vendor-filter-bar">
        <TextField placeholder='min Price' size='small'style = {{marginRight:'2%'}}/>
        <TextField placeholder='max Price' size='small'/>
      </div>
      <div className="vendor-table">
        <DataTable/>
      </div>
      <div className="pagination">
        <PaginationRounded data = {5}/>
      </div>
    </div>
  )
}
