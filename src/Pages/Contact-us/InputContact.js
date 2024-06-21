import React, { useState } from "react";

const InputContact = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const answer = isFocused ? "contact-input-focus" : "contact-input";
  const pop = isFocused ? "pop" : "";

  // Event handler for focus
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Event handler for blur
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className={props.className}>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        
        className={answer}
        autoComplete="off"
        type="text"
        name={props.name}
        required
      />
      
      <label className={pop}>{props.label}</label>
      <span className={pop}>{props.icon}</span>
    </div>
  );
};
export default InputContact;