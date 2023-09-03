import { createContext, useReducer } from "react";

export const cartContext = createContext()
export const Context = (props) => 
{
    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD": 
            const tempState = state.filter((produce) => action.payload.id = produce.id);
            if (tempState.length > 0) {
                return state;
            } else {
                return [...state, action.payload];
            }
            
            default:
                return state;
        }
    };
    
    const [ state, dispatch ] = useReducer(reducer, [])
    // localStorage.setItem("state", JSON.stringify(state));
    const info={state, dispatch};
    return ( <cartContext.Provider value={info}>{props.children}</cartContext.Provider>
    );
};