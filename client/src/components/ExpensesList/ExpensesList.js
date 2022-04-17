import './ExpensesList.css';
import ExpenseItem from './../Expenses/ExpenseItem';
function ExpensesList(props) {
  const filteredExpenses = props.expenses.filter(result => {
    if (props.year === 'All Expenses') {
      return true;
    } else if (new Date(result.date).toLocaleString('en-US', { year: 'numeric' }) === props.year) {
      return true;
    }
    return false;
  });
  return (
    <ul className='expenses-list'>
      {
        filteredExpenses.length ? filteredExpenses.map((result) => <ExpenseItem date={result.date} name={result.name} amount={result.amount} key={result.name} />) : <h2 className='expenses-list__fallback'><center>No Expenses found for selected Year</center></h2>
      }
    </ul>
  )
}
export default ExpensesList;
