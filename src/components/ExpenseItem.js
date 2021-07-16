import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
// props get the data that is passed in the tag of jsx as an attribute.

function ExpenseItem(props) {
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
}

export default ExpenseItem;
