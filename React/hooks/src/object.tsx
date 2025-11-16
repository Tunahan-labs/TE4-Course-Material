import { useState } from "react";

export default function ContactDetails() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <>
      <label>
        First Name:
        <input
          value={form.firstName}
          onChange={handleChange}
          name="firstName"
        />
      </label>
      <label>
        Last Name:
        <input value={form.lastName} onChange={handleChange} name="lastName" />
      </label>
      <label>
        Email:
        <input value={form.email} onChange={handleChange} name="email" />
      </label>

      <button onClick={() => console.log("Data to submit:", form)}>
        Submit
      </button>

      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </>
  );
}
