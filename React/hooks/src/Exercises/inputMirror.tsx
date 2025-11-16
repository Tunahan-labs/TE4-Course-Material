import { useState } from "react";

export function InputMirror() {
  const [input, setInput] = useState({
    input: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((input) => ({
      ...input,
      [name]: value,
    }));
  };

  return (
    <>
      <label>
        Input:
        <input value={input.input} onChange={handleChange} name="input" />
      </label>

      <p>{input.input}</p>
    </>
  );
}
