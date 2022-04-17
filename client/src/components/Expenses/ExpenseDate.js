import './ExpenseDate.css';
import Card from '../UI/Card';
function ExpenseDate(props) {
  let date = props.date;
  let month = new Date(date);
  let day = month.toLocaleString('en-US', { day: 'numeric' });
  let year = month.toLocaleString('en-US', { year: 'numeric' });
  month = month.toLocaleString('en-US', { month: 'long' });
  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </Card>);
}
export default ExpenseDate;
