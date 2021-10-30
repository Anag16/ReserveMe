import React from "react";
import { IconButton, Add, Remove } from "@mui/material";

export default function Counter(props) {

  return (
    <main className="Counter">
      <h1>Counter</h1>
      <IconButton>
        <Add />
      </IconButton>
      <h1>{props.count}</h1>
      <IconButton>
        <Remove />
      </IconButton>
    </main>
  )
}