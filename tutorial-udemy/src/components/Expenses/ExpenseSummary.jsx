import './ExpenseSummary.css';

const ExpenseSummary = (props) => {
    const expenseSummary = () => {
        let result = 0;
        props.expenses.forEach(expense => {
            result += expense.amount;
        });
        return result;
    };

    return (
        <div className="expense-summary">
            <div className="expense-summary__information">  Expenses summary: {expenseSummary()}$ </div>
        </div>
    );
};

export default ExpenseSummary;