import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// props get the data that is passed in the tag of jsx as an attribute.

const ExpenseItem = (props) => {
  const [expenseTitle, setTitle] = useState(props.title);

  // let expenseTitle = props.title;
  const expenseAmount = props.amount;

  const clickHandler = () => {
    setTitle('Updated!!');
    console.log("Clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
