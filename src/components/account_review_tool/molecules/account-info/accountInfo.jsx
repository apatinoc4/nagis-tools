import "./accountInfo.scss";

const AccountInfo = (props) => {
  const { accountInfo, activeGuild } = props;
  return (
    <div className="m-accountinfo-container">
      <div className="m-accountinfo-report_title">
        <p>
          {activeGuild === "Krispy-Kreme" ? "KRISPYKREME" : "DUNKIN'"} ACCOUNT
          REVIEW
        </p>
      </div>
      <div className="m-accountinfo-name_rank">
        <div className="m-accountinfo-field">
          <p className="m-accountinfo-field--title">NAME:</p>
          <p className="m-accountinfo-field--info">{accountInfo.accName}</p>
        </div>
        <div className="m-accountinfo-field">
          <p className="m-accountinfo-field--title">RANK:</p>
          <p className="m-accountinfo-field--info">{accountInfo.accLevel}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
