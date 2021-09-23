import React from "react";
import "./inputField.scss";

const InputField = (props) => {
  let { title, type, handler, target, targetfield, style } = props;

  return (
    <div
      className={`a-inputfield-container ${
        style === "accInfo" ? "accInfoField" : ""
      }`}
    >
      <label>{title}</label>
      {type === "textInput" ? (
        <input
          onChange={(event) => {
            let newObject = { ...target };
            newObject[targetfield] = event.target.value;
            handler(newObject);
          }}
        />
      ) : type === "numberInput" ? (
        <input
          onChange={(event) => {
            let newObject = { ...target };
            newObject[targetfield] = event.target.value;
            handler(newObject);
          }}
          type="number"
        />
      ) : type === "textArea" ? (
        <textarea
          onChange={(event) => {
            let newObject = { ...target };
            newObject[targetfield] = event.target.value;
            handler(newObject);
          }}
        />
      ) : (
        <> </>
      )}
    </div>
  );
};

export default InputField;
