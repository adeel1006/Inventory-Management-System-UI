import React from 'react'
import './organizations.css'
import Header from '../../../Components/Header/header'
import SearchBar from '../../../Components/SearchBar/searchBar'
import SelectField from '../../../Components/Select/select'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material'

export default function organizations() {
  return (
    <div>
        <Header/>
        <div className="org-container">
            <div className="org-header">
                <div className="org-left-header">
                <h1>Organizations</h1>
                <SearchBar/>
                <SelectField/>
                </div>
                <div className="org-right-header">
                    <Button style={{color: 'white', backgroundColor: 'seagreen'}}><AddIcon/>Add</Button>
                </div>
                
            </div>
        </div>
    </div>
  )
}
