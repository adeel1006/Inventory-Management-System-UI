import React from 'react'
import './dashboard.css'
import Header from '../../../Components/Header/header'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function dashboard() {
  return (
    <div className='dashboard-container'>
      <Header/>
      <div className="dashboard-content">
        <div className="card-header">
          <h1>Dashboard</h1>
        </div>
        <div className="card-data">
          <div className="org-data data">
            organizations
            <div className="data-figure">
              <h1>1500</h1>
              <ArrowDropUpIcon style={{fontSize: 'larger'}}/>
            </div>
            XX new this month
          </div>
          <div className="admin-data data">
          organizations
            <div className="data-figure">
              <h1>1500</h1>
              <ArrowDropUpIcon style={{fontSize: 'larger'}}/>
            </div>
            XX new this month
          </div>
          <div className="pen-data data">
          organizations
            <div className="data-figure">
              <h1>1500</h1>
              <ArrowDropUpIcon style={{fontSize: 'larger'}}/>
            </div>
            XX new this month
          </div>
          <div className="res-data data">
          organizations
            <div className="data-figure">
              <h1>1500</h1>
              <ArrowDropUpIcon style={{fontSize: 'larger'}}/>
            </div>
            XX new this month
          </div>
        </div>
        <div className="card-graph"></div>
        <div className="card-table"></div>
      </div>
    </div>
  )
}
