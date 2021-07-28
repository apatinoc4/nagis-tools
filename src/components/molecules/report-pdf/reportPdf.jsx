import "./reportPdf.scss";
import React, { forwardRef } from "react";
// import RadarChart from "../../atoms/radar-chart/radarChart";
import BodyField from "../body-field/bodyField";
import AccountInfo from "../account-info/accountInfo";
import OverviewField from "../../atoms/overview-field/overviewField";
const ReportPdf = forwardRef((props, ref) => {
  let { reviewer, accountInfo, maxedStats, veredictInfo, activeGuild } = props;
  const categoryList = ["units", "espers", "vcs", "gear"];
  const overviewList = [
    { title: "Conclusions:", description: veredictInfo.conclusion },
  ];

  // Values for minimum requirements and amazing requirements

  let amazing = {
    units: activeGuild === "Krispy-Kreme" ? 15 : 6,
    espers: activeGuild === "Krispy-Kreme" ? 10 : 5,
    vcs: activeGuild === "Krispy-Kreme" ? 8 : 3,
    gear: activeGuild === "Krispy-Kreme" ? 17 : 8,
  };

  let minimum = {
    units: activeGuild === "Krispy-Kreme" ? 10 : 3,
    espers: activeGuild === "Krispy-Kreme" ? 6 : 3,
    vcs: activeGuild === "Krispy-Kreme" ? 6 : 1,
    gear: activeGuild === "Krispy-Kreme" ? 10 : 4,
  };
  return (
    <div ref={ref}>
      <div className="m-reportpdf-container">
        <div className="m-reportpdf-header">
          <AccountInfo accountInfo={accountInfo} reviewer={reviewer} />
        </div>
        <div className="m-reportpdf-body">
          {categoryList.map((elem, i) => {
            return (
              <BodyField
                key={i}
                type={elem}
                accountInfo={accountInfo}
                maxedStats={maxedStats}
                activeGuild={activeGuild}
                amazing={amazing}
                minimum={minimum}
              />
            );
          })}
        </div>
        <div className="m-reportpdf-footer">
          <div className="m-reportpdf-overview">
            <div className="m-reportpdf-overview--veredict">
              {overviewList.map((elem, i) => {
                return (
                  <OverviewField
                    title={elem.title}
                    description={elem.description}
                    key={i}
                  />
                );
              })}
            </div>
            {/* <div className="m-reportpdf-overview--radarchart">
              <RadarChart maxedStats={maxedStats} amazing={amazing} />
            </div> */}
          </div>
        </div>
        <div
          className={`m-reportpdf-boxbackground ${
            activeGuild === "Krispy-Kreme" ? "kk" : "dunkin"
          }`}
        ></div>
      </div>
    </div>
  );
});

export default ReportPdf;
