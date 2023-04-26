import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';


export default function AddNewBtn(props) {
  return (
    <div>
        <Button style={{ color: "white", backgroundColor: "seagreen" }}>
            <AddIcon/>Add New {props.title}
          </Button>
    </div>
  )
}
