import "./reportPdf.scss";
import React from "react";
import RadarChart from "../../atoms/radar-chart/radarChart";
import SectionTitle from "../../atoms/section-title/sectionTitle";
import MaxedStats from "../../atoms/maxed-stats/maxedStats";
const ReportPdf = (props) => {
  return (
    <div className="m-reportpdf-container">
      <div className="m-reportpdf-header">
        <div className="m-reportpdf-boxbackground"></div>
        <div className="m-reportpdf-header--headerpic"></div>
        <div className="m-reportpdf-header--accountinfo">
          <div>
            <div className="headerfield">
              <p>Name:</p>
              <p>{props.accountInfo.accName}</p>
            </div>
            <div className="headerfield">
              <p>Rank:</p>
              <p>{props.accountInfo.accLevel}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-reportpdf-body">
        <div className="m-reportpdf-bodyfield">
          <SectionTitle iconName="units" title="UNITS" />
          <div className="m-reportpdf-bodyfield--container">
            <MaxedStats type="units" maxedStats={props.maxedStats} />
            <div className="description">
              <p>{props.accountInfo.units}</p>
            </div>
          </div>
        </div>
        <div className="m-reportpdf-bodyfield">
          <SectionTitle iconName="espers" title="ESPERS" />
          <div className="m-reportpdf-bodyfield--container">
            <MaxedStats type="espers" maxedStats={props.maxedStats} />
            <div className="description">
              <p>{props.accountInfo.espers}</p>
            </div>
          </div>
        </div>
        <div className="m-reportpdf-bodyfield">
          <SectionTitle iconName="vcs" title="VISION CARDS" />
          <div className="m-reportpdf-bodyfield--container">
            <MaxedStats type="vcs" maxedStats={props.maxedStats} />
            <div className="description">
              <p>{props.accountInfo.vcs}</p>
            </div>
          </div>
        </div>
        <div className="m-reportpdf-bodyfield">
          <SectionTitle iconName="gear" title="GEAR" />
          <div className="m-reportpdf-bodyfield--container">
            <MaxedStats type="gear" maxedStats={props.maxedStats} />
            <div className="description">
              <p>{props.accountInfo.gear}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-reportpdf-footer">
        <div className="m-reportpdf-overview">
          <div className="m-reportpdf-overview--radarchart">
            <RadarChart maxedStats={props.maxedStats} />
          </div>
          <div className="m-reportpdf-overview--veredict">
            <div className="overviewfield">
              <p>Strengths:</p>
              <p className="final-description">
                {props.veredictInfo.strenghts}
              </p>
            </div>
            <div className="overviewfield">
              <p>Weaknesses:</p>
              <p className="final-description">
                {props.veredictInfo.weaknesses}
              </p>
            </div>
            <div className="overviewfield">
              <p>Improve ASAP:</p>
              <p className="final-description">{props.veredictInfo.improve}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPdf;
