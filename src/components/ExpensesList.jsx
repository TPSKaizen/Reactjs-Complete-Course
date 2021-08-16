import React from 'react'
import expenses from './expenses'
import ExpenseItem from './ExpenseItem'
import "./ExpensesList.css"

function ExpensesList() {
    return (
        <div className="expenses">
            {expenses.map((item) => {
          return <ExpenseItem 
            key = {item.id}
            expenseDate = {item.date}
            expenseTitle = {item.title} 
            expenseAmount = {item.amount}
          />
        })}
        </div>
    )
}

export default ExpensesList;
