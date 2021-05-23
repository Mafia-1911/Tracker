import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function Transaction({transaction}) {//or you can use props 
  const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount >0 ? '+' : '-';

    return (
      < li className={transaction.amount <0 ? 'minus' :'plus' }>  {transaction.text}
    <span>{sign}€{Math.abs(transaction.amount)}</span>//-50 or +E100
 <button 
    onClick={()=>deleteTransaction(transaction.id)}
    className="delete-btn">x</button>
  </li> )}

//just export 