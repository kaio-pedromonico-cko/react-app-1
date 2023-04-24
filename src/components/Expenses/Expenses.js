import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState("");

  const onFilterChanged = (newYear) => {
    setYear(newYear);
  };

  const onFilterClear = () => {
    setYear("");
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={year}
          onFilterChanged={onFilterChanged}
          onFilterClear={onFilterClear}
        />
        {props.items
          .filter((item) =>
            year !== "" ? item.date.getFullYear() === parseInt(year) : item
          )
          .sort((a, b) => a.date.getTime() - b.date.getTime())
          .map((item, idx) => (
            <div key={idx}>
              <ExpenseItem
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            </div>
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
