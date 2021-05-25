//specifying how the state changes based on certain actions ,reducer is used for how will the state change 
export default (state,action ) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {...state,
            transactions:state.transactions.filter(transaction=>transaction.id!==action.payload) }//deleting the trans
        case 'ADD_TRANSACTION':
            return {...state,
                transactions:[action.payload,...state.transactions]}
                //payload is our new transaction's entire object  


         
            default:return state;
        
    }
}
//create a new state and send it 