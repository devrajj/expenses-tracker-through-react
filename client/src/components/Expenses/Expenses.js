import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from '../ExpensesList/ExpensesList';
import { useState } from 'react';
import Chart from '../Charts/Chart';
const years = [
  'All Expenses',
  '2019',
  '2020',
  '2021',
  '2022'
];
function Expenses(props) {
  let chartData = [
    {
      label: 'Jan',
      count: 0
    },
    {
      label: 'Feb',
      count: 0
    },
    {
      label: 'Mar',
      count: 0
    },
    {
      label: 'Apr',
      count: 0
    },
    {
      label: 'May',
      count: 0
    },
    {
      label: 'Jun',
      count: 0
    },
    {
      label: 'Jul',
      count: 0
    },
    {
      label: 'Aug',
      count: 0
    },
    {
      label: 'Sep',
      count: 0
    },
    {
      label: 'Oct',
      count: 0
    },
    {
      label: 'Nov',
      count: 0
    },
    {
      label: 'Dec',
      count: 0
    }
  ];
  const [year, setYear] = useState('All Expenses');
  function filterExpensesBasisYear(year) {
    setYear(year);
  }
  for (const expenses of props.expenses) {
    const month = new Date(expenses.date).getMonth();
    const expenseYear = new Date(expenses.date).getFullYear();
    if (year === 'All Expenses') {
      chartData[month].count += expenses.amount;
    } else {
      if (expenseYear.toString() === year) {
        chartData[month].count += expenses.amount;
      }
    }
  }
  return (
    <Card className='expenses'>
      <ExpensesFilter years={years} dropdownYear={year} onFilteringYear={filterExpensesBasisYear} />
      <Chart chartData={chartData} />
      <ExpensesList expenses={props.expenses} year={year} />
    </Card>
  )
}
export default Expenses;
