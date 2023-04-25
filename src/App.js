import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let INITIAL_STATE = [
  { id: 1, title: "Car Insurance", amount: 100, date: new Date(2023, 3, 10) },
  { id: 2, title: "Food", amount: 60, date: new Date(2023, 3, 10) },
  { id: 3, title: "Cinema", amount: 30, date: new Date(2023, 3, 8) },
  {
    id: 4,
    title: "Electricity",
    amount: 190,
    date: new Date(2023, 3, 12),
  },
  {
    id: 5,
    title: "Vacation",
    amount: 1000,
    date: new Date(2022, 10, 15),
  },
  {
    id: 6,
    title: "Ipad",
    amount: 500,
    date: new Date(2021, 9, 7),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_STATE);

  const onSaveExpense = (expense) => {
    setExpenses((prevState) => [...prevState, expense]);
  };

  return (
    <div>
      <NewExpense onSaveExpense={onSaveExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
