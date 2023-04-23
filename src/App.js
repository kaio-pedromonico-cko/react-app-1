import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  let initialState = [
    { id: 1, title: "Car Insurance", amount: 100, date: new Date(2023, 3, 10) },
    { id: 2, title: "Food", amount: 60, date: new Date(2023, 3, 10) },
    { id: 3, title: "Cinema", amount: 30, date: new Date(2023, 3, 8) },
    {
      id: 4,
      title: "Electricity",
      amount: 190,
      date: new Date(2023, 3, 12),
    },
  ];

  const [expenses, setExpenses] = useState(initialState);

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
