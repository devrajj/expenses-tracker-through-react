import { useState } from 'react';
import './ExpenseForm.css';
function ExpenseForm(props) {
  const [enteredData, setEnteredData] = useState({
    name: '',
    amount: '',
    date: ''
  })
  function nameChangedHandler(event) {
    setEnteredData((prevState) => {
      return { ...prevState, name: event.target.value }
    })
  }
  function amountChangedHandler(event) {
    setEnteredData((prevState) => {
      return { ...prevState, amount: +event.target.value }
    })
  }
  function dateChangedHandler(event) {
    setEnteredData((prevState) => {
      return { ...prevState, date: event.target.value }
    })
  }
  function submitHandler(event) {
    event.preventDefault();
    props.onSaveExpense(enteredData);
    setEnteredData({
      name: '',
      amount: '',
      date: ''
    })
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__controls'>
          <label className='new-expense__control label'>Name</label>
          <input className='new-expense__control input' value={enteredData.name} type="text" onChange={nameChangedHandler} required />
        </div>
        <div className='new-expense__controls'>
          <label className='new-expense__control label'>Amount</label>
          <input className='new-expense__control input' value={enteredData.amount} type="number" min="0.01" step="0.01" onChange={amountChangedHandler} required />
        </div>
        <div className='new-expense__controls'>
          <label className='new-expense__control label'>Date</label>
          <input className='new-expense__control input' value={enteredData.date} type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangedHandler} required />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type="button" onClick={props.checkForCancel}>Cancel</button>
        <button type="submit">Add New Expense</button>
      </div>
    </form >
  )
}
export default ExpenseForm;
