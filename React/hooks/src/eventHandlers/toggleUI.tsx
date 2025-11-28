import React, { useState } from "react";
import CustomButton from "./custonButton";

const ToggleUI: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handler to flip state
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      {/* Button label changes depending on state */}
      <CustomButton
        onClick={toggleVisibility}
        label={isVisible ? "Hide" : "Show"}
      />

      {/* Conditionally render UI */}
      {isVisible && <p>This is the toggled content!</p>}
    </div>
  );
};

export default ToggleUI;
