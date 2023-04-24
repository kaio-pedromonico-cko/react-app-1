import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const onFilterChanged = (ev) => {
    if (ev.target.value === "") props.onFilterClear();
    else props.onFilterChanged(ev.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={onFilterChanged}>
          <option value="">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
