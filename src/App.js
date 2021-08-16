import React from 'react'
import ExpenseItem from './components/ExpenseItem'
import expenses from './components/expenses'


function App() {
  return (
    <div>
      <h1> Hello World </h1>
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

export default App
