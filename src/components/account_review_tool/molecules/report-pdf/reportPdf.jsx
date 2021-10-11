import "./reportPdf.scss";
import React, { forwardRef } from "react";
import RadarChart from "../../atoms/radar-chart/radarChart";
import BodyField from "../body-field/bodyField";
import AccountInfo from "../account-info/accountInfo";
import OverviewField from "../../atoms/overview-field/overviewField";
import towerBg from "../../../../assets/account_review_tool/backgrounds/report-bg.png";

const ReportPdf = forwardRef((props, ref) => {
  const {
    reviewer,
    accountInfo,
    maxedStats,
    veredictInfo,
    activeGuild,
    activeState,
  } = props;
  const categoryList = ["units", "espers", "vcs", "gear"];
  const overviewList = [
    { title: "Conclusions:", description: veredictInfo.conclusion },
  ];

  const wlength = window.innerWidth;

  return (
    <div ref={ref}>
      <div className="m-reportpdf-container">
        <div className="m-reportpdf-header">
          <AccountInfo accountInfo={accountInfo} activeGuild={activeGuild} />
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
            <div className="m-reportpdf-overview--radarchart">
              {wlength <= 1024 && activeState.preview ? (
                <RadarChart maxedStats={maxedStats} />
              ) : wlength >= 1024 ? (
                <RadarChart maxedStats={maxedStats} />
              ) : (
                <></>
              )}
              <div className="m-reportpdf-reviewer">
                <p className="m-reportpdf-reviewer--title">Reviewed by:</p>
                <p className="m-reportpdf-reviewer--info">
                  {reviewer.reviewer}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`m-reportpdf-boxbackground ${
            activeGuild === "Krispy-Kreme" ? "kk" : "dunkin"
          }`}
        >
          <div className="m-reportpdf-boxbackground--topgd"></div>
          <img src={towerBg} alt="towerBG" />
          <div className="m-reportpdf-boxbackground--bottomgd"></div>
        </div>
      </div>
    </div>
  );
});

export default ReportPdf;
