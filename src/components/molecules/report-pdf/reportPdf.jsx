import React from "react";
import "./reportPdf.scss";
import headerpic from "../../../assets/images/wotv-warrior-of-light.jpg";

const ReportPdf = (props) => {
  console.log(props.maxedStats.maxUnits, typeof props.maxedStats.maxUnits);
  let rank = (value) => {
    if (parseInt(value) >= 10) {
      return "Great!";
    } else if (parseInt(value) >= 5) {
      return "Good";
    } else if (parseInt(value) < 5) {
      return "Needs Work";
    } else {
      return "";
    }
  };
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
              <p>{rank(props.maxedStats.maxUnits)}</p>
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
              <p>{rank(props.maxedStats.maxEspers)}</p>
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
              <p>{rank(props.maxedStats.maxVcs)}</p>
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
              <p>{rank(props.maxedStats.maxGear)}</p>
            </div>
            <div className="description">
              <p>{props.accountInfo.gear}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPdf;
