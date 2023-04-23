import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const date = props.date;
  const amount = props.amount;

  const clickHandler = () => {
    setTitle("Tada");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">£{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
