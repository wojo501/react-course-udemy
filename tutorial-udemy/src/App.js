import ExpenseSummary from "./components/Expenses/ExpenseSummary";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
      <ExpenseSummary expenses={expenses} />
    </div >
  );
}

export default App;
