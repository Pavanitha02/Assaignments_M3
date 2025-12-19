import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count !== 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }
  }, [count]);

  return (
    <div>
      <h2>Counter Application</h2>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

export default Counter;
