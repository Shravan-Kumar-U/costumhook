import { useState } from 'react'
import { usePrev } from '../hook/usePrev';
import './App.css'

//This code is to check use of  usePrev cosutom hook
//usePrev will show the prev value of the state
//DIFF b/n useReff and useState
/**
 * # When ever the value of the state changes useState will change the component means rerenders the page
 * # but here useReff, no matter how many times you have change the value of the useReff variable it will not rerender the page
 * 
 */
function App() {
  //Here whenever the value of the state vaiable changes then it will change the component (rerenders the webpage)
  const [state, setstate] = useState(0);
  //Here no matter how many times you have change the value of the prev it will not rerender the component  
  const prev = usePrev(state);
  return (
    <>
      <p>{state}</p>
      <button onClick={
        () => {
          setstate(cur => cur + 1);
        }
      }> Click me </button>
      <p>The previous value was {prev}</p>
    </>
  )
}

export default App
