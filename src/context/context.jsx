import { createContext, useReducer, useEffect } from 'react';

export const cartContext = createContext();

export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        const tempState = state.filter((product) => action.payload.id = product.id);
        if (tempState.length > 0) {
          return state;
        } else {
          const newState = [...state, action.payload];
          localStorage.setItem('cart', JSON.stringify(newState)); // Save to localStorage
          return newState;
        }
default:
        return state;
    }
  };

  // Load data from localStorage when initializing the state
  const initialState = JSON.parse(localStorage.getItem('cart')) || [];

  const [state, dispatch] = useReducer(reducer, initialState);

  // Use useEffect to save data to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);
const info = { state, dispatch };
  return (
    <cartContext.Provider value={info}>{props.children}</cartContext.Provider>
  );
};





















// import { createContext, useReducer } from "react";

// export const cartContext = createContext()
// export const Context = (props) => 
// {
//     const reducer = (state, action) => {
//         switch (action.type) {
//             case "ADD": 
//             const tempState = state.filter((produce) => action.payload.id = produce.id);
//             if (tempState.length > 0) {
//                 return state;
//             } else {
//                 return [...state, action.payload];
//             }
            
//             default:
//                 return state;
//         }
//     };
    
//     const [ state, dispatch ] = useReducer(reducer, [])
//     // localStorage.setItem("state", JSON.stringify(state));
//     const info={state, dispatch};
//     return ( <cartContext.Provider value={info}>{props.children}</cartContext.Provider>
//     );
// };