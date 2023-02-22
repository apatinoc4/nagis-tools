import { ChangeEvent, useContext } from "react";
import TextField from "@mui/material/TextField";
import { ReportContext } from "../../context/reportToolProvider";
import "./inputField.scss";

interface InputFieldProps {
  targetField: string;
  title: string;
  type: "numberInput" | "textArea" | "textInput";
  style?: string;
}

const InputField = (props: InputFieldProps) => {
  const { title, type, targetField, style } = props;
  const { reviewInfo, setReviewInfo } = useContext(ReportContext);

  const settargetField = (event: ChangeEvent<HTMLInputElement>) => {
    const accountInfo = { ...reviewInfo };
    accountInfo[targetField] = event.target.value;
    setReviewInfo(accountInfo);
  };

  console.log(reviewInfo, "HOLI");

  const TEXT_FIELDS = {
    numberInput: (
      <TextField
        size="small"
        id="outlined-number"
        label={title}
        type="number"
        onChange={settargetField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    ),
    textArea: (
      <TextField
        id="filled-multiline-static"
        margin="normal"
        onChange={settargetField}
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
        onChange={settargetField}
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
