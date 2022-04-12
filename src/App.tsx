import React, {useState} from 'react'
import Test from './tt'

const App = () => {
  const [state, setState] = useState<number>(1);
  return (<>
  <Test/>
  <button onClick={() => setState(prev => prev+1)}>+</button>
  <div>{state}</div>
  </>)
}

export default App