import React from "react";
import InputField from "../../atoms/input-field/inputField";
import "./inputFields.scss";

const InputFields = (props) => {
  let {
    reviewer,
    accountInfo,
    maxedStats,
    veredictInfo,
    setReviewer,
    setveredictInfo,
    setAccountInfo,
    setMaxedStats,
  } = props;

  const accountInfoList = [
    {
      title: "Name",
      type: "textInput",
      handler: setAccountInfo,
      target: accountInfo,
      targetfield: "accName",
      style: "accInfo",
    },
    {
      title: "Rank",
      type: "numberInput",
      handler: setAccountInfo,
      target: accountInfo,
      targetfield: "accLevel",
      style: "accInfo",
    },
    {
      title: "Reviewer",
      type: "textInput",
      handler: setReviewer,
      target: reviewer,
      targetfield: "reviewer",
      style: "accInfo",
    },
  ];
  const accountBodyList = [
    {
      title: "Maxed UR",
      type: "numberInput",
      handler: setMaxedStats,
      target: maxedStats,
      targetfield: "maxUnits",
    },
    {
      title: "Units",
      type: "textArea",
      handler: setAccountInfo,
      target: accountInfo,
      targetfield: "units",
    },
    {
      title: "Maxed Espers",
      type: "numberInput",
      handler: setMaxedStats,
      target: maxedStats,
      targetfield: "maxEspers",
    },
    {
      title: "Espers",
      type: "textArea",
      handler: setAccountInfo,
      target: accountInfo,
      targetfield: "espers",
    },
    {
      title: "Maxed Vision Cards",
      type: "numberInput",
      handler: setMaxedStats,
      target: maxedStats,
      targetfield: "maxVcs",
    },
    {
      title: "Vision Cards",
      type: "textArea",
      handler: setAccountInfo,
      target: accountInfo,
      targetfield: "vcs",
    },
    {
      title: "+5 Gear",
      type: "numberInput",
      handler: setMaxedStats,
      target: maxedStats,
      targetfield: "maxGear",
    },
    {
      title: "Gear",
      type: "textArea",
      handler: setAccountInfo,
      target: accountInfo,
      targetfield: "gear",
    },
  ];
  const veredictList = [
    {
      title: "Strenghts",
      type: "textArea",
      handler: setveredictInfo,
      target: veredictInfo,
      targetfield: "strenghts",
    },
    {
      title: "Weaknesses",
      type: "textArea",
      handler: setveredictInfo,
      target: veredictInfo,
      targetfield: "weaknesses",
    },
    {
      title: "Improve ASAP",
      type: "textArea",
      handler: setveredictInfo,
      target: veredictInfo,
      targetfield: "improve",
    },
  ];
  return (
    <div className="m-inputfields-container">
      <div className="m-inputfields-accountinfo">
        {accountInfoList.map((elem, i) => {
          return (
            <InputField
              key={i}
              title={elem.title}
              type={elem.type}
              handler={elem.handler}
              target={elem.target}
              targetfield={elem.targetfield}
              style={elem.style}
            />
          );
        })}
      </div>
      <div className="m-inputfields-body">
        {accountBodyList.map((elem, i) => {
          return (
            <InputField
              key={i}
              title={elem.title}
              type={elem.type}
              handler={elem.handler}
              target={elem.target}
              targetfield={elem.targetfield}
            />
          );
        })}
      </div>
      <div className="m-inputfields-veredict">
        {veredictList.map((elem, i) => {
          return (
            <InputField
              key={i}
              title={elem.title}
              type={elem.type}
              handler={elem.handler}
              target={elem.target}
              targetfield={elem.targetfield}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InputFields;
