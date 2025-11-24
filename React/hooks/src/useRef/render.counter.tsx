import { useRef, useState } from "react";

export const RenderCounter = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  renderCount.current += 1;

  return (
    <div>
      <h2>Render Counter</h2>
      <p>Count in state: {count}</p>
      <p>Count in ref: {renderCount.current}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment State
      </button>
      <button onClick={() => renderCount.current++}>Increment Ref</button>
      <div>
        <h2>NOTE:</h2>
        <p>
          The state change causes a re-render, which updates both the state and
          ref values displayed. However, changing the ref does not trigger a
          re-render, so the displayed ref value remains unchanged until the next
          state update.
        </p>
      </div>
    </div>
  );
};
