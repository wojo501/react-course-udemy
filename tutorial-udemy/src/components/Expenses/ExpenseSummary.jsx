import './ExpenseSummary.css';
import { useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';

const ExpenseSummary = forwardRef((props, ref) => {
    const [totalExpenses, setTotalExpenses] = useState("0");
    useImperativeHandle(ref, (total) => ({
        callChildFunction(total) {
            setTotalExpenses(total);
        }
    })
    );


    return (
        <div className="expense-summary">

            <div className="expense-summary__information">  Expenses summary: {totalExpenses}$ </div>
        </div>
    );
});

export default ExpenseSummary;