import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
function ExpenseItem(props) {
  let amount = props.amount;
  let name = props.name;
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{name}</h2>
          <div className='expense-item__price'>${amount}</div>
        </div>
      </Card >
    </li>
  )
};
export default ExpenseItem;
