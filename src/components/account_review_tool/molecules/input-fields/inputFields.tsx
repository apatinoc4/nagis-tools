import InputField from "../../atoms/input-field/inputField";
import { ReviewInfo } from "../../types/types";

import "./inputFields.scss";

type InputFieldParameters = {
  [key: string]: {
    targetField: keyof ReviewInfo;
    title: string;
    type: "numberInput" | "textArea" | "textInput";
    style?: string;
  }[];
};

const INPUT_FIELDS_PARAMETERS: InputFieldParameters = {
  accountInfo: [
    {
      targetField: "accName",
      title: "Name",
      type: "textInput",
      style: "accInfo",
    },
    {
      targetField: "accLevel",
      title: "Rank",
      type: "numberInput",
      style: "accInfo",
    },
    {
      targetField: "reviewer",
      title: "Reviewer",
      type: "textInput",
      style: "accInfo",
    },
  ],
  accountBody: [
    {
      targetField: "maxUnits",
      title: "Maxed UR",
      type: "numberInput",
    },
    {
      targetField: "units",
      title: "Units",
      type: "textArea",
    },
    {
      targetField: "maxEspers",
      title: "Maxed Espers",
      type: "numberInput",
    },
    {
      targetField: "espers",
      title: "Espers",
      type: "textArea",
    },
    {
      targetField: "maxVcs",
      title: "Maxed Vision Cards",
      type: "numberInput",
    },
    {
      targetField: "vcs",
      title: "Vision Cards",
      type: "textArea",
    },
    {
      targetField: "maxGear",
      title: "+5 Gear",
      type: "numberInput",
    },
    {
      targetField: "gear",
      title: "Gear",
      type: "textArea",
    },
  ],
  accountVeredict: [
    {
      targetField: "conclusion",
      title: "Conclusions",
      type: "textArea",
    },
  ],
};

const getInputParameters = (
  accountParameters: InputFieldParameters,
  parameter: string
) => {
  const parameters = accountParameters[parameter];
  if (parameters !== undefined) {
    return parameters;
  }
  return [];
};

const InputFields = () => {
  return (
    <div className="m-inputfields-container">
      <div className="m-inputfields-accountinfo">
        {getInputParameters(INPUT_FIELDS_PARAMETERS, "accountInfo").map(
          (input, index) => {
            const { style, targetField, title, type } = input;
            return (
              <InputField
                key={index}
                title={title}
                type={type}
                targetField={targetField}
                style={style}
              />
            );
          }
        )}
      </div>
      <div className="m-inputfields-body">
        {getInputParameters(INPUT_FIELDS_PARAMETERS, "accountBody").map(
          (input, index) => {
            const { targetField, title, type } = input;
            return (
              <InputField
                key={index}
                title={title}
                type={type}
                targetField={targetField}
              />
            );
          }
        )}
      </div>
      <div className="m-inputfields-veredict">
        {getInputParameters(INPUT_FIELDS_PARAMETERS, "accountVeredict").map(
          (input, index) => {
            const { targetField, title, type } = input;
            return (
              <InputField
                key={index}
                title={title}
                type={type}
                targetField={targetField}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default InputFields;
