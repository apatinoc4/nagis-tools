import "./reportPdf.scss";

import React from "react";
import headerpic from "../../../assets/images/wotv-warrior-of-light.jpg";

const ReportPdf = (props) => {
  console.log(props.maxedStats.maxUnits, typeof props.maxedStats.maxUnits);
  return (
    <div className="m-reportpdf-container">
      <div className="m-reportpdf-header">
        <div className="m-reportpdf-header--headerpic">
          <img src={headerpic} alt="headerimage"></img>
        </div>
        <div className="m-reportpdf-header--accountinfo">
          <div className="headerfield">
            <p>Account Name</p>
            <p>{props.accountInfo.accName}</p>
          </div>
          <div className="headerfield">
            <p>Rank</p>
            <p>{props.accountInfo.accLevel}</p>
          </div>
        </div>
      </div>
      <div className="m-reportpdf-body">
        <div className="m-reportpdf-bodyfield">
          <p>Units</p>
          <div className="m-reportpdf-bodyfield--container">
            <div className="maxed">
              <p>{props.maxedStats.maxUnits}</p>
              <p>Maxed URs</p>
              <p>
                {parseInt(props.maxedStats.maxUnits) > 12
                  ? "Amazing!"
                  : parseInt(props.maxedStats.maxUnits) >= 9
                  ? "Good"
                  : parseInt(props.maxedStats.maxUnits) < 9
                  ? "Needs Work"
                  : ""}
              </p>
            </div>
            <div className="description">
              <p>{props.accountInfo.units}</p>
            </div>
          </div>
        </div>
        <div className="m-reportpdf-bodyfield">
          <p>Espers</p>
          <div className="m-reportpdf-bodyfield--container">
            <div className="maxed">
              <p>{props.maxedStats.maxEspers}</p>
              <p>Maxed</p>
              <p>
                {parseInt(props.maxedStats.maxEspers) > 9
                  ? "Amazing!"
                  : parseInt(props.maxedStats.maxEspers) >= 6
                  ? "Good"
                  : parseInt(props.maxedStats.maxEspers) < 6
                  ? "Needs Work"
                  : ""}
              </p>
            </div>
            <div className="description">
              <p>{props.accountInfo.espers}</p>
            </div>
          </div>
        </div>
        <div className="m-reportpdf-bodyfield">
          <p>Vision Cards</p>
          <div className="m-reportpdf-bodyfield--container">
            <div className="maxed">
              <p>{props.maxedStats.maxVcs}</p>
              <p>Maxed</p>
              <p>
                {parseInt(props.maxedStats.maxVcs) > 7
                  ? "Amazing!"
                  : parseInt(props.maxedStats.maxVcs) >= 4
                  ? "Good"
                  : parseInt(props.maxedStats.maxVcs) < 4
                  ? "Needs Work"
                  : ""}
              </p>
            </div>
            <div className="description">
              <p>{props.accountInfo.vcs}</p>
            </div>
          </div>
        </div>
        <div className="m-reportpdf-bodyfield">
          <p>Gear</p>
          <div className="m-reportpdf-bodyfield--container">
            <div className="maxed">
              <p>{props.maxedStats.maxGear}</p>
              <p>+5 Gear</p>
              <p>
                {parseInt(props.maxedStats.maxGear) > 12
                  ? "Amazing!"
                  : parseInt(props.maxedStats.maxGear) >= 8
                  ? "Good"
                  : parseInt(props.maxedStats.maxGear) < 8
                  ? "Needs Work"
                  : ""}
              </p>
            </div>
            <div className="description">
              <p>{props.accountInfo.gear}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="m-reportpdf-footer">
        <div className="m-reportpdf-overview">
          <div className="m-reportpdf-overviewfield">
            <p>Strengths:</p>
            <p>Hello</p>
          </div>
          <div>
            <p>Weaknesses:</p>
            <p>Hello</p>
          </div>
          <div>
            <p>Recommendations:</p>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPdf;
