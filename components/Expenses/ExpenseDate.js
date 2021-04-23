import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__Month">{month}</div>
      <div className="expense-date__Year">{year}</div>
      <div className="expense-date__Day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
