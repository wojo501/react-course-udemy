import ExpenseSummary from "./components/Expenses/ExpenseSummary";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState, useRef } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 67.67,
    date: new Date(2022, 7, 15),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 87.7,
    date: new Date(2022, 7, 15),
  },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: 891,
    date: new Date(2022, 7, 15),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const ChildRef = useRef();


  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  const sumExpenses = (expenses) => {
    if (expenses.length !== 0) {
      let result = 0;
      expenses.forEach(expense => {
        console.log("expenseApp", expense)
        console.log("resultApp", result)
        result += parseFloat(expense.amount);
      });
      ChildRef.current.callChildFunction(result);
    }
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onSummary={sumExpenses} />
      <ExpenseSummary ref={ChildRef} />
    </div >
  );
}

export default App;
