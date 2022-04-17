import './NewExpense.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
  const [isFormToBeShown, formContent] = useState(false);
  function saveExpenseData(enteredData) {
    props.onSaveExpense([enteredData]);
  }
  function loadForm() {
    formContent(true);
  }
  function setCancelledForm() {
    formContent(false);
  }
  return (
    <div className='new-expense'>
      {
        isFormToBeShown ? <ExpenseForm onSaveExpense={saveExpenseData} checkForCancel={setCancelledForm} /> : <button type="submit" onClick={loadForm}>Add New Expense</button>
      }
    </div>
  )
}
export default NewExpense;
