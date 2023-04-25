import React from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const onFilterChanged = (ev) => {
    if (ev.target.value === "") props.onFilterClear();
    else props.onFilterChanged(ev.target.value);
  };

  const onFilterCleared = (ev) => {
    props.onFilterClear();
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
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      <button onClick={onFilterCleared}>Clear Filter</button>
    </div>
  );
};

export default ExpensesFilter;
