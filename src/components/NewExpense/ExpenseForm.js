import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const initialState = {
    title: "",
    amount: "",
    date: "",
  };

  const [expense, setExpense] = useState(initialState);

  const titleChangeHandler = (e) => {
    setExpense((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    setExpense((prevState) => {
      return { ...prevState, amount: +e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setExpense((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  const onCancelClick = (e) => {
    props.closeForm();
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      ...expense,
      date: new Date(expense.date),
    };

    props.onSaveExpense(expenseData);
    setExpense(initialState);
    props.closeForm();
  };

  return (
    <form onSubmit={submitHandler} onReset={onCancelClick}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expense.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={expense.amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={expense.date}
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
