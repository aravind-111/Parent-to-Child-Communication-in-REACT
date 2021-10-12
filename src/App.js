import { useState } from "react";
import Child from "./child";

function App() {
  const [count, setCount] = useState(0);
  function poda() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={poda}>Add</button>
      <Child add={count} />
    </>
  );
}

export default App;
