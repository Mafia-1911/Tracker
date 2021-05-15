import React,{useContext} from 'react'
import {  GlobalContext  } from '../context/GlobalState'

export default function TransactionList() {
    // const context = useContext(GlobalContext);//the array
        const {transactions}= useContext(GlobalContext);
        //console.log(transactions);
return (
        <div>
                 <h3>History</h3>
      <ul className="list">
           { transactions.map(transaction=>   <li className="minus">  {transaction.text}
           <span>{transaction.amount}</span>
        <button className="delete-btn">x</button>
         </li> )}
       
      </ul>
        </div>
    )
}
