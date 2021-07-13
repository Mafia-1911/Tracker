//as its  a smaller one only one global context will do the job 
import React,{ createContext,useReducer } from 'react';
import AppReducer from './AppReducer'



//initial state 
const initialState={transactions:[  { id: 1, text: 'Flower', amount: -20 },
                                    { id: 2, text: 'Salary', amount: 300 },
                                    { id: 3, text: 'Book', amount: -10 },
                                    { id: 4, text: 'Camera', amount: 150 }
                                ]
                    };

//creating context  (for global usage)
export const GlobalContext = createContext(initialState);

//providor component 
//the providor, provides the state,actions to component its wrapped around 
export const GlobalProvider =({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)


//Action's
function deleteTransaction(id){
    dispatch(
        {
            type:'DELETE_TRANSACTION',
            payload: id
        }
    )
}
function addTransaction(transaction) {
    dispatch({
        type:'ADD_TRANSACTION',
        payload : transaction
    })
    
}


    return (<GlobalContext.Provider value={  {transactions:state.transactions
    ,deleteTransaction
    ,addTransaction}  }>
    
        {children}
        </GlobalContext.Provider>)

}
