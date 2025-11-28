import React from "react";

// Define prop types
type CustomButtonProps = {
  onClick: () => void; // function to run when clicked
  label: string; // text to display
};

// Functional component
const CustomButton: React.FC<CustomButtonProps> = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default CustomButton;
