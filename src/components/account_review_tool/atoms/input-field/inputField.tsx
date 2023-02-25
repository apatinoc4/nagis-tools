import { ChangeEvent, useContext } from "react";
import TextField from "@mui/material/TextField";
import { ReportContext } from "../../context/reportToolProvider";
import { ReviewInfo } from "../../types/types";
import "./inputField.scss";

interface InputFieldProps {
  targetField: keyof ReviewInfo;
  title: string;
  type: "numberInput" | "textArea" | "textInput";
  style?: string;
}

const InputField = (props: InputFieldProps) => {
  const { title, type, targetField, style } = props;
  const { reviewInfo, setReviewInfo } = useContext(ReportContext);

  const setTargetField = (event: ChangeEvent<HTMLInputElement>) => {
    const accountInfo = { ...reviewInfo };
    accountInfo[targetField] = event.target.value;
    setReviewInfo(accountInfo);
  };

  const TEXT_FIELDS = {
    numberInput: (
      <TextField
        size="small"
        id="outlined-number"
        label={title}
        type="number"
        onChange={setTargetField}
        InputProps={{
          inputProps: {
            min: 0,
            max: 100,
          },
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    ),
    textArea: (
      <TextField
        id="filled-multiline-static"
        margin="normal"
        onChange={setTargetField}
        label={title}
        inputProps={{ maxLength: 944 }}
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
        inputProps={{ maxLength: 20 }}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={setTargetField}
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
