import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";

function Expenses(props) {
  const expenses = props.items;

  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default Expenses;
