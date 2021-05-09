import "./reportPdf.scss";
import React, { forwardRef } from "react";
import RadarChart from "../../atoms/radar-chart/radarChart";
import BodyField from "../body-field/bodyField";
import AccountInfo from "../account-info/accountInfo";
import OverviewField from "../../atoms/overview-field/overviewField";
const ReportPdf = forwardRef((props, ref) => {
  let { reviewer, accountInfo, maxedStats, veredictInfo } = props;
  const categoryList = ["units", "espers", "vcs", "gear"];
  const overviewList = [
    { title: "Strengths:", description: veredictInfo.strenghts },
    { title: "Weaknesses:", description: veredictInfo.weaknesses },
    { title: "Improve ASAP:", description: veredictInfo.improve },
  ];
  return (
    <div ref={ref} className="m-reportpdf-container">
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
            <RadarChart maxedStats={maxedStats} />
          </div>
        </div>
      </div>
      <div className="m-reportpdf-boxbackground"></div>
    </div>
  );
});

export default ReportPdf;
