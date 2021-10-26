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
      <h1>{props.counnt}</h1>
      <img
        className="counter_reduce"
        src="images/reduce.png"
        alt="Reduce"
        onClick={props.onReduce}
      />
    </main>
  )
}