import {useContext} from 'react'
import { cartContext } from '../context/context'


export default function Cart() {
    const globalState = useContext(cartContext)
    const state = globalState.state;
    const dispatch = globalState.dispatch;
  return (
    <div>
        <div>
        {state.map((produce) => {
            return (
                <div key={produce} > 
                <div>
                    <p>{produce.name}</p>
                    <img src={produce.posterUrl} alt='' />
                </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}
