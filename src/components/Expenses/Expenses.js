import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const initialState = props.items.sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );
  const [expenses, setExpenses] = useState(initialState);

  const onFilterChanged = (year) => {
    const filteredExpenses = props.items.filter(
      (item) => item.date.getFullYear() == year
    );
    setExpenses(filteredExpenses);
  };

  const onFilterClear = () => {
    setExpenses(props.items);
  };

  return (
    <div>
      <Card>
        <ExpenseFilter
          onFilterChanged={onFilterChanged}
          onFilterClear={onFilterClear}
        />
      </Card>
      <Card className="expenses">
        {expenses.map((item, idx) => (
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
