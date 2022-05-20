import {useState} from "react";

import BtnInc from "./buttonInc";
import CounterValue from "./counterValue";
import BtnDec from "./buttonDec";

export default function Counter({startCount}) {
  const [count, setCount] = useState(startCount);
  const incHandler = () => setCount(count => count + 1);
  const decHandler = () => setCount(count => count - 1);
  return (
    <>
      <BtnInc click={incHandler}></BtnInc>
      <CounterValue value={count}></CounterValue>
      <BtnDec click={decHandler}></BtnDec>
    </>
)

}