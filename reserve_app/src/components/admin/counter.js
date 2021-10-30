import React from "react";

export default function Counter(props) {

  return (
    <main className="Counter">
      <h1>Counter</h1>
      <img
        className="counter_add"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
      <h1>{props.count}</h1>
      <img
        className="counter_minus"
        src="images/minus.png"
        alt="Minus"
        onClick={props.onMinus}
      />
    </main>
  )
}