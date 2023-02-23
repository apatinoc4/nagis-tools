import "./accountInfo.scss";

type ReviewInfo = {
  reviwer: string;
  accName: string;
  accLevel: number;
  maxUnits: number;
  maxEspers: number;
  maxVcs: number;
  maxGear: number;
  units: string;
  espers: string;
  vcs: string;
  gear: string;
  conclusion: string;
};

interface AccountInfoProps {
  accountInfo: ReviewInfo;
  activeGuild: string;
}

const AccountInfo = (props: AccountInfoProps) => {
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
