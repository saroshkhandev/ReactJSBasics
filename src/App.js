// import React from 'react'; newer react does not need to import react
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, addExpense] = useState(DUMMY_EXPENSES);

  const addExpensesHandler = (expense) => {
    // expenses = {
    //   ...expenses,
    //   ...enteredExpense,
    // };
    // addExpense([expense, ...DUMMY_EXPENSES]);
    addExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  // we can pass attributes in jsx and then import in component with props.
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  // this is the underhood code for this return statement.
  //  newExpenseItem={addExpensesHandler}
  return (
    <div>
      <NewExpense onAddExpense={addExpensesHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
