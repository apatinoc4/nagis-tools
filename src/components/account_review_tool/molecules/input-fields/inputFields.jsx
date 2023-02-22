import InputField from "../../atoms/input-field/inputField.tsx";

import "./inputFields.scss";

const INPUT_FIELDS_PARAMETERS = {
  accountInfo: [
    {
      title: "Name",
      type: "textInput",
      targetField: "accName",
      style: "accInfo",
    },
    {
      title: "Rank",
      type: "numberInput",
      targetField: "accLevel",
      style: "accInfo",
    },
    {
      title: "Reviewer",
      type: "textInput",
      targetField: "reviewer",
      style: "accInfo",
    },
  ],
  accountBody: [
    {
      title: "Maxed UR",
      type: "numberInput",
      targetField: "maxUnits",
    },
    {
      title: "Units",
      type: "textArea",
      targetField: "units",
    },
    {
      title: "Maxed Espers",
      type: "numberInput",
      targetField: "maxEspers",
    },
    {
      title: "Espers",
      type: "textArea",
      targetField: "espers",
    },
    {
      title: "Maxed Vision Cards",
      type: "numberInput",
      targetField: "maxVcs",
    },
    {
      title: "Vision Cards",
      type: "textArea",
      targetField: "vcs",
    },
    {
      title: "+5 Gear",
      type: "numberInput",
      targetField: "maxGear",
    },
    {
      title: "Gear",
      type: "textArea",
      targetField: "gear",
    },
  ],
  accountVeredict: [
    {
      title: "Conclusions",
      type: "textArea",
      targetField: "conclusion",
    },
  ],
};

const getInputParameters = (accountParameters, parameter) => {
  if (accountParameters[parameter]) return accountParameters[parameter];
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
