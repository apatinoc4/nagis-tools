import React from "react";
import "./reportPdf.scss";

const ReportPdf = (props) => {
  return (
    <div className="m-reportpdf-container">
      <div className="m-reportpdf-header">
        <div className="m-reportpdf-header--headerpic"></div>
        <div className="m-reportpdf-header--accountinfo">
          <div>
            <p>Account Name</p>
            <p>Nagi</p>
          </div>
          <div>
            <p>Rank</p>
            <p>26</p>
          </div>
        </div>
      </div>
      <div>
        <p>{props.accOverview}</p>
      </div>
    </div>
  );
};

export default ReportPdf;
