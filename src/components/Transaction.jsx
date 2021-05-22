export default function Transaction({transaction}) {//or you can use props 
    const sign = transaction.amount >0 ? '+' : '-';

    return (
      < li className={transaction.amount <0 ? 'minus' :'plus' }>  {transaction.text}
    <span>{sign}€{Math.abs(transaction.amount)}</span>//-50 or +E100
 <button className="delete-btn">x</button>
  </li> )}

//just export 