import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 12),
  },
  {
    id: "e2",
    title: "Paper Paper",
    amount: 66.12,
    date: new Date(2022, 3, 12),
  },
  {
    id: "e3",
    title: "Welcome paper",
    amount: 23.12,
    date: new Date(2021, 7, 12),
  },
  {
    id: "e4",
    title: "Hello paper",
    amount: 11.12,
    date: new Date(2023, 2, 12),
  },
];

function App() {
 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
   setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
   });
  } 

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} /> 
    </div>
  );
}

export default App;
