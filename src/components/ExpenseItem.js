import "./ExpenseItem.css";
import Date from "./Date";
// props get the data that is passed in the tag of jsx as an attribute.

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-Us", {
    month: "long",
  });
  const day = props.date.toLocaleString("en-Us", {
    day: "2-digit",
  });
  const year = props.date.getFullYear();
  const expenseTitle = props.title;
  const expenseAmount = props.amount;

  return (
    <div className="expense-item">
      <Date month={month} day={day} year={year} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
