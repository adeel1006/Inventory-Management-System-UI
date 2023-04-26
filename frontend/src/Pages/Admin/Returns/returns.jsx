import React from 'react'
import './returns.css'
import SearchBar from '../../../Components/SearchBar/searchBar'
import SelectField from '../../../Components/Select/select'
import DataTable from '../../../Components/table/table'
import PaginationRounded from '../../../Components/pagination/pagination'


export default function Returns() {
  return (
    <div className='container'>
      <div className="ret-header">
        <div className="left-header">
          <h1>Returns</h1>
          <SearchBar/>
          <SelectField placeHolder = {'Select Status'}/>
          <SelectField placeHolder = {'Select Type'}/>
        </div>
      </div>
      <div className="ret-table">
        <DataTable/>
      </div>
      <div className="pagination">
          <PaginationRounded data={5} />
        </div>
    </div>
  )
}
