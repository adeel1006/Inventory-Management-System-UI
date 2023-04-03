import React from 'react'
import './dataCard.css'
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUpRounded";

export default function DataCard(props) {
  return (
    <div className='data-card-contaner'>
        <span className='data-card-title'>{props.title}</span>
        <div className="data-card-figure">
            <span className='figure'>{props.amount}</span>
            <ArrowDropUpIcon style = {{fontSize : '5rem', color: 'seagreen'}}/>
        </div>
        <p className='data-tagline gray-text'>{props.tagline}</p>
    </div>
  )
}
