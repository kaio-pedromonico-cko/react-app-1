import { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("");

  const onFilterChanged = (newYear) => {
    setYear(newYear);
  };

  const onFilterClear = () => {
    setYear("");
  };

  const filteredItems = props.items.filter((item) =>
    year !== "" ? item.date.getFullYear().toString() === year : item
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={year}
          onFilterChanged={onFilterChanged}
          onFilterClear={onFilterClear}
        />
        <ExpensesChart items={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
