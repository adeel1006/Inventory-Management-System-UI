import React from 'react'
import { Button } from '@mui/material'



export default function SaveBtn({onClick}) {
  return (
    <div>
        <Button onClick={onClick} style={{ color: "white", backgroundColor: "seagreen", marginLeft: '20%' }}>
            Save
          </Button>
    </div>
  )
}
