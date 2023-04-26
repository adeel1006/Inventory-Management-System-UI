import React from 'react'
import './adminDashboard.css'
import DataCard from '../../../Components/DataCardDashboard/dataCard'
import MyChart from '../../../Components/graph/graph'
import { Button } from '@mui/material'
import DataTable from '../../../Components/table/table'
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export default function AdminDashboard() {
  return (
    <div className='container'>
        <span className='main-heading'>Dashboard</span>
        <div className="dashboard-data">
            <DataCard title = 'Employees' amount = {500} tagline = '500 new employees added this month'/>
            <DataCard title = 'Inventory Items' amount = {500} tagline = '50 new items addes this month'/>
            <DataCard title = 'Vendors' amount = {25} tagline = '2 new vendors added this month'/>
            <DataCard title = 'Categories' amount = {5} tagline = '1 new category added this month'/>
        </div>
        <div className="charts">
            <div className="inventory-chart">
                <div className="chart-header">
                    <span chart-heading>Inventory Items</span>
                    <Button style={{color: 'gray', fontSize: 'small'}}><FileDownloadOutlinedIcon/>Download report</Button>
                </div>
                <div className="chart"><MyChart admin = {true}/></div>
            </div>
            <div className="complaints-chart">
                <div className="chart-header">
                    <span className="chart-heading">Complaints</span>
                    <Button style={{color: 'gray', fontSize: 'small'}}><FileDownloadOutlinedIcon/>Download report</Button>
                </div>
                <div className="chart"><MyChart admin = {true}/></div>
            </div>
        </div>
        <div className="admin-complaints">
            <div className="admin-comp-header component-header">
                <span className='cmp-heading'>Recent Complaints</span>
                <Button style={{color: 'gray'}}>See all</Button>
            </div>
            <div className="admin-cpm-table">
                <DataTable/>
            </div>
        </div>

    </div>
  )
}
