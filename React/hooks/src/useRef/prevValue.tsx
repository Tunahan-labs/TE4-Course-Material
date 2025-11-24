import { useRef, useEffect, useState } from "react";

export const PrevValue = () => {
  const [text, setText] = useState<string>("");
  const prevText = useRef<string>("Tuna");

  useEffect(() => {
    prevText.current = text;
  }, [text]);

  return (
    <div>
      <h2>show Previous text with useRef</h2>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>Current Text: {text}</p>
      <p>Previous Text: {prevText.current}</p>
    </div>
  );
};
