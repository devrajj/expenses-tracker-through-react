import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  function filterYearHandler(event) {
    props.onFilteringYear(event.target.value);
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by Year</label>
        <select value={props.dropdownYear} onChange={filterYearHandler}>
          {props.years.map((result) => <option value={result.toString()} key={result.toString()} > {result}</option >)};
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
