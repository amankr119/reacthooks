
import React, { useReducer,  } from 'react'

const Usereducer = () => {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const increase = ()=>{
        dispatch({type:ACTION.INCREASE})
    }

    const decrease = ()=>{
        dispatch({type:ACTION.DECREASE})
    }
  return (
    <div className='p-2 m-2'>
      <button type='button' onClick={()=>increase()}>Increase</button>
      <p className='' >{state.count}</p>
      <button type='button' onClick={()=>decrease()}>Decrease</button>
    </div>
  )
}

export default Usereducer

const ACTION = {
    INCREASE: " increase",
    DECREASE: " decrease",
}

const initialState = {count: 0}
const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case ACTION.INCREASE:
            return{count: state.count + 1};
        case ACTION.DECREASE:
            return{count: state.count - 1};
        default:
            return state;
    }
}