import "./reportPdf.scss";
import React, { forwardRef } from "react";
import RadarChart from "../../atoms/radar-chart/radarChart";
import BodyField from "../body-field/bodyField";
import AccountInfo from "../account-info/accountInfo";
import OverviewField from "../../atoms/overview-field/overviewField";
import towerBg from "../../../../assets/account_review_tool/backgrounds/report-bg.png";

const ReportPdf = forwardRef((props, ref) => {
  const { reviewer, accountInfo, maxedStats, veredictInfo, activeGuild } =
    props;
  const categoryList = ["units", "espers", "vcs", "gear"];
  const overviewList = [
    { title: "Conclusions:", description: veredictInfo.conclusion },
  ];

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
              {/* <RadarChart maxedStats={maxedStats} /> */}
              <div className="m-reportpdf-reviewer">
                <p>Reviewed by</p>
                <p>{reviewer.reviewer}</p>
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
