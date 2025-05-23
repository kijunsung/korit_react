import { useState } from "react";
import useTitle from "../Js/useTitle";

function Counter() {
  const [count, setCount] = useState(0);
  useTitle(`${count}번 클릭`)

  return(
  <div>
    <p>Counter = {count}</p>
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
      증가
    </button>
  </div>
  );
}

export default Counter;