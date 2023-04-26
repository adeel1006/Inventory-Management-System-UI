import React from 'react'
import './requests.css'
import SearchBar from '../../../Components/SearchBar/searchBar'
import SelectField from '../../../Components/Select/select'
import AlphabeticalOrderButton from '../../../Components/FilterButtons/Alphabatical/alphabeticalOrderButton'
import DataTable from '../../../Components/table/table'
import PaginationRounded from '../../../Components/pagination/pagination'


export default function Requests() {
  return (
    <div className='container'>
      <div className="component-header req-header">
        <div className="left-header">
          <h1>Requests</h1>
          <SearchBar/>
          <SelectField placeHolder = {'Select Status'}/>
        </div>
        <div className="right-header">
          <AlphabeticalOrderButton/>
        </div>
      </div>
      <div className="req-table">
        <DataTable/>
      </div>
      <div className="pagination">
          <PaginationRounded data={5} />
        </div>
    </div>
  )
}
