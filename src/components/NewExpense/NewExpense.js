import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const submitHandler = (data) => {
    const expense = {
      ...data,
      id: Math.floor(Math.random() * 99999).toString(),
    };
    props.onSaveExpense(expense);
  };

  const toggleForm = () => setDisplayForm((prevState) => !prevState);

  return (
    <div className="new-expense">
      {!displayForm && <button onClick={toggleForm}>Add new Expense</button>}
      {displayForm && (
        <ExpenseForm onSaveExpense={submitHandler} closeForm={toggleForm} />
      )}
    </div>
  );
};

export default NewExpense;
