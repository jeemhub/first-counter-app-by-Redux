import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { DATA, DECREMENT, INCREMENT } from './Redux/Action/Type';
import { useRef, useState } from 'react'
import { AddNum, increment as incrementA}  from './Redux/Action/RedusersAction';
function App() {
  const [a, seta] = useState('')
  const { counter } = useSelector(state => state);
  const { data } = useSelector(state => state);
  const dispatch = useDispatch();
  const numRef=useRef();

  const increment = () => {
    incrementA(dispatch)
  }
  const addnum=()=>{
    const numb=numRef.current.value
    AddNum(dispatch,numb);
  }
  const decrement = () => {
    const numb=numRef.current.value;
    dispatch({ type: DECREMENT });
  }
  const takedata = () => {
    dispatch({ type: DATA, data: a })
  }
  return (
    <div >
      <h1>counter APP</h1>
      <p>{counter}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <br/>
      <input type="number" ref={numRef} />
      <button onClick={addnum}>ADD</button>
      <br/>
      <input placeholder='write any thing...' onChange={(e) => seta(e.target.value)}></input>
      <button onClick={takedata}>ADD</button>
      <h1>{data}</h1>
    </div>
  )
}

export default App
