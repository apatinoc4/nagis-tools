import React from "react";
import "./inputFields.scss";

const InputFields = (props) => {
  return (
    <div>
      <div className="m-inputfields-field">
        <label>Account Name</label>
        <input
          onChange={(event) =>
            props.setAccountInfo({
              ...props.accountInfo,
              accName: event.target.value,
            })
          }
        />
      </div>
      <div className="m-inputfields-field">
        <label>Rank</label>
        <input
          type="number"
          onChange={(event) =>
            props.setAccountInfo({
              ...props.accountInfo,
              accLevel: event.target.value,
            })
          }
        />
      </div>
      <div className="m-inputfields-field">
        <label>Maxed UR</label>
        <input
          onChange={(event) =>
            props.setMaxedStats({
              ...props.maxedStats,
              maxUnits: event.target.value,
            })
          }
          type="number"
        />
      </div>
      <div className="m-inputfields-field">
        <label>Units</label>
        <textarea
          onChange={(event) =>
            props.setAccountInfo({
              ...props.accountInfo,
              units: event.target.value,
            })
          }
        />
      </div>
      <div className="m-inputfields-field">
        <label>Maxed Espers</label>
        <input
          onChange={(event) =>
            props.setMaxedStats({
              ...props.maxedStats,
              maxEspers: event.target.value,
            })
          }
          type="number"
        />
      </div>
      <div className="m-inputfields-field">
        <label>Espers</label>
        <textarea
          onChange={(event) =>
            props.setAccountInfo({
              ...props.accountInfo,
              espers: event.target.value,
            })
          }
        />
      </div>
      <div className="m-inputfields-field">
        <label>Maxed Vision Cards</label>
        <input
          onChange={(event) =>
            props.setMaxedStats({
              ...props.maxedStats,
              maxVcs: event.target.value,
            })
          }
          type="number"
        />
      </div>
      <div className="m-inputfields-field">
        <label>Vision Cards</label>
        <textarea
          onChange={(event) =>
            props.setAccountInfo({
              ...props.accountInfo,
              vcs: event.target.value,
            })
          }
        />
      </div>
      <div className="m-inputfields-field">
        <label>+5 Gear</label>
        <input
          onChange={(event) =>
            props.setMaxedStats({
              ...props.maxedStats,
              maxGear: event.target.value,
            })
          }
          type="number"
        />
      </div>
      <div className="m-inputfields-field">
        <label>Gear</label>
        <textarea
          onChange={(event) =>
            props.setAccountInfo({
              ...props.accountInfo,
              gear: event.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default InputFields;
