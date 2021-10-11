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
          size="small"
          label={title}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) => {
            let newObject = { ...target };
            newObject[targetfield] = event.target.value;
            handler(newObject);
          }}
        />
      ) : type === "numberInput" ? (
        <TextField
          size="small"
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
          margin="normal"
          onChange={(event) => {
            let newObject = { ...target };
            newObject[targetfield] = event.target.value;
            handler(newObject);
          }}
          label={title}
          InputLabelProps={{
            shrink: true,
          }}
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
