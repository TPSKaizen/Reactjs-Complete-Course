import React from 'react'

function ExpenseDate(props) {
    const month = props.expenseDate.toLocaleString("en-us", {month: 'long'});
    const day = props.expenseDate.toLocaleString("en-us", {day: '2-digit'});
    const year = props.expenseDate.getFullYear();
    return (
        <div>
            <div> {month + " " + year + "  " + day} </div>
        </div>
    )
}

export default ExpenseDate
