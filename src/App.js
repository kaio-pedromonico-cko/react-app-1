import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { id: 1, title: "Car Insurance", amount: 100, date: new Date(2023, 3, 10) },
    { id: 2, title: "Food", amount: 60, date: new Date(2023, 3, 10) },
    { id: 3, title: "Cinema", amount: 30, date: new Date(2023, 3, 8) },
    {
      id: 4,
      title: "Scottish Power",
      amount: 190,
      date: new Date(2023, 3, 12),
    },
  ];

  return (
    <div>
      <h2>A Title</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
