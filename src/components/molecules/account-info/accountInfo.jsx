import React from "react";
import "./accountInfo.scss";

const AccountInfo = (props) => {
  let { accountInfo, reviewer } = props;
  return (
    <div className="m-accountinfo-container">
      <div className="m-accountinfo-field">
        <p className="m-accountinfo-field--title">Name:</p>
        <p className="m-accountinfo-field--info">{accountInfo.accName}</p>
      </div>
      <div className="m-accountinfo-field">
        <p className="m-accountinfo-field--title">Rank:</p>
        <p className="m-accountinfo-field--info">{accountInfo.accLevel}</p>
      </div>
      <div className="m-accountinfo-field">
        <p className="m-accountinfo-field--title">Reviewer:</p>
        <p className="m-accountinfo-field--info">{reviewer.reviewer}</p>
      </div>
    </div>
  );
};

export default AccountInfo;
