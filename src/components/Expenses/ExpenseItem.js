// import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// props get the data that is passed in the tag of jsx as an attribute -- updated.

const ExpenseItem = (props) => {
  // use state gives us two outputs 1. the value which is passed into it as parameter
  // 2. a function to change its value.
  // Every title have its own state that's why it does not changes every title.
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
