import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const onFilterChanged = (ev) => {
    if (ev.target.value == "All") onFilterClear();
    else props.onFilterChanged(ev.target.value);
  };

  const onFilterClear = (ev) => {
    props.onFilterClear();
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onFilterChanged}>
          <option value="All">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
        <button onClick={onFilterClear}>Clear</button>
      </div>
    </div>
  );
};

export default ExpensesFilter;
