import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

function Expenses(props) {
  const expenses = props.items;

  return (
    <div className="expenses">
      {expenses.map((item, idx) => (
        <div key={idx}>
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            idx
          />
        </div>
      ))}
    </div>
  );
}

export default Expenses;
