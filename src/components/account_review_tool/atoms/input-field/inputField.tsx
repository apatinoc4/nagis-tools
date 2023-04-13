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
        className="report-tool-account-input"
        id="outlined-number"
        InputProps={{
          inputProps: {
            min: 0,
            max: 100,
          },
        }}
        InputLabelProps={{
          className: "report-tool-label",
          shrink: true,
        }}
        label={title}
        onChange={setTargetField}
        size="small"
        type="number"
      />
    ),
    textArea: (
      <TextField
        className="report-tool-account-input"
        id="filled-multiline-static"
        margin="normal"
        inputProps={{ maxLength: 944 }}
        InputLabelProps={{
          className: "report-tool-label",
          shrink: true,
        }}
        label={title}
        multiline
        onChange={setTargetField}
        rows={4}
      />
    ),
    textInput: (
      <TextField
        className="report-tool-account-input"
        inputProps={{ maxLength: 20 }}
        InputLabelProps={{
          className: "report-tool-label",
          shrink: true,
        }}
        label={title}
        onChange={setTargetField}
        size="small"
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
