import React from "react";
import TextField from "@mui/material/TextField";
import "./inputField.scss";

const InputField = (props) => {
  let { title, type, handler, target, targetfield, style } = props;

  return (
    <div
      className={`a-inputfield-container ${
        style === "accInfo" ? "accInfoField" : ""
      }`}
    >
      {type === "textInput" ? (
        <TextField
          id="outlined-required"
          label={title}
          onChange={(event) => {
            let newObject = { ...target };
            newObject[targetfield] = event.target.value;
            handler(newObject);
          }}
        />
      ) : type === "numberInput" ? (
        <TextField
          id="outlined-number"
          label={title}
          type="number"
          onChange={(event) => {
            let newObject = { ...target };
            newObject[targetfield] = event.target.value;
            handler(newObject);
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      ) : type === "textArea" ? (
        <TextField
          id="filled-multiline-static"
          onChange={(event) => {
            let newObject = { ...target };
            newObject[targetfield] = event.target.value;
            handler(newObject);
          }}
          label={title}
          multiline
          rows={4}
        />
      ) : (
        <> </>
      )}
    </div>
  );
};

export default InputField;
