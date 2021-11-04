import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import './admin.css';

export default function Counter(props) {
  
  return (
    <main className="layout">
      <h1>Counter</h1>
      <div className="Counter">
        <IconButton>
        <AddIcon sx={{ fontSize: 222 }} onClick={props.onAdd}/>
        </IconButton>
        <h1>1</h1>
        <IconButton>
        <RemoveIcon sx={{ fontSize: 222 }} onClick={props.onRemove}/>
        </IconButton>
      </div>
    </main>
  )
}