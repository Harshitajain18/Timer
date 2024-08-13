import { useState } from "react";
function Counter(){
    const [count, setCount] = useState(0);

  function handleDecrease() {
    return (
      setCount(count > 0 ? count - 1 : 0)
    )
  }
    return(
        <div className='onepage'>
        <h1 style={{ color: "white", margin: "8px" }}>Count : {count} </h1>
        <button className='increase' onClick={() => setCount(count + 1)} >Increase</button>
        <button className='decrease' onClick={handleDecrease}>Decrease</button>
        <button className='reset' onClick={() => setCount(0)}>Reset</button>
      </div>

    )
}
export default Counter;