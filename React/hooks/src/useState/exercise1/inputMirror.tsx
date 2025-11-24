import { useState } from "react";

export function InputMirror() {
  const [text, setText] = useState<string>("");

  return (
    <div>
      <label>
        Input:
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="input"
        />
      </label>

      <p>{text}</p>
    </div>
  );
}
