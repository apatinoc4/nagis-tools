import React from "react";
import MaxedStats from "../../atoms/maxed-stats/maxedStats";
import "./bodyField.scss";
import units from "../../../../assets/account_review_tool/images/Units.png";
import espers from "../../../../assets/account_review_tool/images/Espers.png";
import vcs from "../../../../assets/account_review_tool/images/VisionCards.png";
import gear from "../../../../assets/account_review_tool/images/Equipment.png";

const BodyField = (props) => {
  const { type, accountInfo, maxedStats, activeGuild } = props;

  const RESOURCE_INFO = {
    units: {
      accInfo: accountInfo.units,
      bodyIdx: "first",
      imgSrc: units,
      keyword: "units",
    },
    espers: {
      accInfo: accountInfo.espers,
      bodyIdx: "second",
      keyword: "espers",
      imgSrc: espers,
    },
    vcs: {
      keyword: "vcs",
      accInfo: accountInfo.vcs,
      bodyIdx: "third",
      imgSrc: vcs,
    },
    gear: {
      keyword: "gear",
      accInfo: accountInfo.gear,
      bodyIdx: "fourth",
      imgSrc: gear,
    },
  };

  const { accInfo, bodyIdx, imgSrc, keyword } = RESOURCE_INFO[type];

  const dlength = accInfo.length;
  const wlength = window.innerWidth;

  return (
    <div className="m-bodyfield-container">
      <img
        className={`m-bodyfield-categoryimg--${keyword}`}
        src={imgSrc}
        alt="category"
      />
      <div className={`m-bodyfield-body ${bodyIdx}`}>
        <MaxedStats
          type={keyword}
          maxedStats={maxedStats}
          activeGuild={activeGuild}
        />
        <div className="m-bodyfield-description">
          {wlength >= 1024 ? (
            <>
              <p
                style={
                  dlength >= 990
                    ? { fontSize: 6 + "px" }
                    : { fontSize: 7 + "px" }
                }
              >
                {accInfo}
              </p>
            </>
          ) : (
            <>
              <p
                style={
                  dlength >= 990
                    ? { fontSize: 0.4 + "vh" }
                    : { fontSize: 0.5 + "vh" }
                }
              >
                {accInfo}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyField;
