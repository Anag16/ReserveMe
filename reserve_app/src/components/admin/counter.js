import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Counter(props) {

  return (
    <main className="Counter">
      <h1>Counter</h1>
      <IconButton>
        <AddIcon />
      </IconButton>
      <h1>{props.count}</h1>
      <IconButton>
        <RemoveIcon />
      </IconButton>
    </main>
  )
}