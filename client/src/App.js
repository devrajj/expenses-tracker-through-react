import './App.css';
import { React, useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const dummyExpenses = [
  {
    date: '2020-08-14',
    name: 'Toilet Paper',
    amount: 94.12
  },
  {
    date: '2020-03-12',
    name: 'New TV',
    amount: 799.49
  },
  {
    date: '2021-03-28',
    name: 'Car Insurance',
    amount: 294.67
  },
  {
    date: '2022-06-12',
    name: 'New Desk(Wooden)',
    amount: 450
  }
];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  function saveExpenseData(enteredData) {
    setExpenses((previous) => {
      return enteredData.concat(previous);
    });
  }
  return (
    <div>
      <NewExpense onSaveExpense={saveExpenseData} />
      <Expenses expenses={expenses} />
    </div >
  );
}

export default App;
