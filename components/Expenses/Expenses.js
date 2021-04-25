import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [yearSelection, setYearSelection] = useState("2021");
  const expensesFilterHandler = (selectedYear) => {
    setYearSelection(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (itemInfo) => itemInfo.date.getFullYear().toString() === yearSelection // This filters the results by years selected
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearSelection}
          onSelectFilter={expensesFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
