import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export default function IncomeExpense() {
  const {transactions} = useContext(GlobalContext);
 console.log(transactions.amount);
  const amounts= transactions.map(transaction=>transaction.amount);
  const income = amounts
                  .filter(item=>item>0)
                  .reduce((acc,item)=>(acc += item),0)
                  .toFixed(2);
  const expense = amounts.filter (item=> item<0)
                          .reduce((acc,item)=>(acc+= item),0)
                          .toFixed(2);               

    return ( 
        <div>
        
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${Math.abs(expense)}</p>
        </div>
    </div>
        </div>
    )
}
