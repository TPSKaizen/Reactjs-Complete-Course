import React from 'react'
import "./ExpenseDate.css";

function ExpenseDate(props) {
    const month = props.expenseDate.toLocaleString("en-us", {month: 'long'});
    const day = props.expenseDate.toLocaleString("en-us", {day: '2-digit'});
    const year = props.expenseDate.getFullYear();
    return (
        <div className ="expense-date">
            <div className = "expense-Date__month"> {month} </div> 
            <div className = "expense-Date__day"> {day} </div> 
            <div className = "expense-Date__year"> {year} </div> 
        </div>
    )
}

export default ExpenseDate
