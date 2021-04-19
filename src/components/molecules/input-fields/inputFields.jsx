import React from "react";
import "./inputFields.scss";

const InputFields = (props) => {
  return (
    <div>
      <div className="m-inputfields-field">
        <label>Account Name</label>
        <input onChange={(event) => props.setAccOverview(event.target.value)} />
      </div>
      <div className="m-inputfields-field">
        <label>Rank</label>
        <input onChange={(event) => props.setAccOverview(event.target.value)} />
      </div>
      <div className="m-inputfields-field">
        <label>Account Overview</label>
        <input onChange={(event) => props.setAccOverview(event.target.value)} />
      </div>
      <div className="m-inputfields-field">
        <label>Units</label>
        <input onChange={(event) => props.setAccOverview(event.target.value)} />
      </div>
      <div className="m-inputfields-field">
        <label>Espers</label>
        <input onChange={(event) => props.setAccOverview(event.target.value)} />
      </div>
      <div className="m-inputfields-field">
        <label>Gear</label>
        <input onChange={(event) => props.setAccOverview(event.target.value)} />
      </div>
    </div>
  );
};

export default InputFields;
