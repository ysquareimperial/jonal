import React from "react";

function InputField({
  inputLabel,
  inputId,
  inputName,
  htmlFor,
  inputType,
  inputValue,
  onChange,
}) {
  return (
    <>
      <label style={{ fontSize: 13, fontWeight: "bold" }} htmlFor={htmlFor}>
        {inputLabel}
      </label>
      <input
        id={inputId}
        name={inputName}
        type={inputType}
        className="app_input"
        value={inputValue}
        onChange={onChange}
      />
    </>
  );
}

export default InputField;
