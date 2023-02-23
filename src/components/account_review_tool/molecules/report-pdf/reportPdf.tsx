import "./reportPdf.scss";
import { forwardRef, ForwardedRef, useContext } from "react";
import AccountInfo from "../account-info/accountInfo";
import BodyField from "../body-field/bodyField";
import OverviewField from "../../atoms/overview-field/overviewField";
import RadarChart from "../../atoms/radar-chart/radarChart";
import { ReportContext } from "../../context/reportToolProvider";
import towerBg from "../../../../assets/account_review_tool/backgrounds/report-bg.png";

type BodyFields = {
  name: string;
  maxedStat: string;
}[];

type ActiveState = {
  inputs?: boolean;
  preview?: boolean;
};

interface ReportPdfProps {
  activeGuild: string;
  activeState: ActiveState;
}

const BODY_FIELDS: BodyFields = [
  { name: "units", maxedStat: "maxUnits" },
  { name: "espers", maxedStat: "maxEspers" },
  { name: "vcs", maxedStat: "maxVcs" },
  { name: "gear", maxedStat: "maxGear" },
];

const ReportPdf = forwardRef<HTMLDivElement, ReportPdfProps>(
  (props: ReportPdfProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { activeGuild, activeState } = props;
    const { reviewInfo } = useContext(ReportContext);

    const windowLength = window.innerWidth;

    return (
      <div ref={ref}>
        <div className="m-reportpdf-container">
          <div className="m-reportpdf-header">
            <AccountInfo accountInfo={reviewInfo} activeGuild={activeGuild} />
          </div>
          <div className="m-reportpdf-body">
            {BODY_FIELDS.map((category, index) => {
              const { name, maxedStat } = category;
              return (
                <BodyField
                  key={index}
                  text={reviewInfo[name]}
                  type={name}
                  maxedStat={reviewInfo[maxedStat]}
                />
              );
            })}
          </div>
          <div className="m-reportpdf-footer">
            <div className="m-reportpdf-overview">
              <div className="m-reportpdf-overview--veredict">
                <OverviewField
                  title="Conclusions:"
                  description={reviewInfo.conclusion}
                />
              </div>
              <div className="m-reportpdf-overview--radarchart">
                {windowLength >= 1024 ||
                (windowLength <= 1024 && activeState.preview) ? (
                  <RadarChart maxedStats={reviewInfo} />
                ) : (
                  <></>
                )}
                <div className="m-reportpdf-reviewer">
                  <p className="m-reportpdf-reviewer--title">Reviewed by:</p>
                  <p className="m-reportpdf-reviewer--info">
                    {reviewInfo.reviewer}
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
  }
);

export default ReportPdf;
