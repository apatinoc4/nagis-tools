import React from "react";
import TextField from "@mui/material/TextField";
import "./inputField.scss";

const InputField = (props) => {
  const { title, type, handler, target, targetfield, style } = props;

  const setTargetField = (event) => {
    const accountInfo = { ...target };
    accountInfo[targetfield] = event.target.value;
    handler(accountInfo);
  };

  const TEXT_FIELDS = {
    numberInput: (
      <TextField
        size="small"
        id="outlined-number"
        label={title}
        type="number"
        onChange={(event) => setTargetField(event)}
        InputLabelProps={{
          shrink: true,
        }}
      />
    ),
    textArea: (
      <TextField
        id="filled-multiline-static"
        margin="normal"
        onChange={(event) => setTargetField(event)}
        label={title}
        InputLabelProps={{
          shrink: true,
        }}
        multiline
        rows={4}
      />
    ),
    textInput: (
      <TextField
        size="small"
        label={title}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event) => setTargetField(event)}
      />
    ),
  };

  return (
    <div
      className={`a-inputfield-container ${
        style === "accInfo" ? "accInfoField" : ""
      }`}
    >
      {TEXT_FIELDS[type]}
    </div>
  );
};

export default InputField;
