import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const submitHandler = (data) => {
    const expense = {
      ...data,
      id: Math.floor(Math.random() * 99999).toString(),
    };
    props.onSaveExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={submitHandler} />
    </div>
  );
};

export default NewExpense;
