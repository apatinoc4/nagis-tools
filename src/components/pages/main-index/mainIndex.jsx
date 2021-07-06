import { React, useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import "./mainIndex.scss";
import InputFields from "../../molecules/input-fields/inputFields";
import ReportPdf from "../../molecules/report-pdf/reportPdf";

const Index = () => {
  let [reviewer, setReviewer] = useState({ reviwer: "" });
  let [accountInfo, setAccountInfo] = useState({
    accName: "",
    accLevel: 0,
    units: "",
    espers: "",
    vcs: "",
    gear: "",
  });
  let [maxedStats, setMaxedStats] = useState({
    maxUnits: 0,
    maxEspers: 0,
    maxVcs: 0,
    maxGear: 0,
  });
  let [veredictInfo, setveredictInfo] = useState({
    strenghts: "",
    weaknesses: "",
    improve: "",
  });
  let [activeElement, setActiveElement] = useState({
    input: true,
    preview: true,
  });
  const ref = useRef(null);
  const activeHandler = () => {
    setActiveElement({
      input: !activeElement.input,
      preview: !activeElement.preview,
    });
  };

  return (
    <div className="p-index-container">
      <header className="p-index-header">
        <p className="p-index-header--title">Nagi's Account Review Tool</p>
        <p className="p-index-header--slogan">for Krispy-Kreme and Dunkin'</p>
      </header>
      <div onClick={activeHandler} className="p-index-previewbutton">
        <div className="p-index-previewbutton--innerdiv">
          <p>preview</p>
        </div>
      </div>
      <div className="p-index-headerextender"></div>
      <div className="p-index-mainbody">
        <div
          className={`p-index-mainbody--inputfields ${
            activeElement.input === false ? "hidden" : ""
          }`}
        >
          <InputFields
            reviewer={reviewer}
            accountInfo={accountInfo}
            maxedStats={maxedStats}
            veredictInfo={veredictInfo}
            setReviewer={setReviewer}
            setveredictInfo={setveredictInfo}
            setAccountInfo={setAccountInfo}
            setMaxedStats={setMaxedStats}
          />
          <ReactToPrint
            trigger={() => (
              <button onClick={() => console.log(ref.current)}>
                Generate PDF
              </button>
            )}
            content={() => ref.current}
          />
        </div>
        <div
          className={`p-index-mainbody--reportpreview ${
            activeElement.preview === false ? "hidden" : ""
          }`}
        >
          <ReportPdf
            ref={ref}
            reviewer={reviewer}
            accountInfo={accountInfo}
            maxedStats={maxedStats}
            veredictInfo={veredictInfo}
          />
        </div>
      </div>
      <footer>
        <p>Stay Kreamy</p>
      </footer>
      <div className="temporal-popup">
        <div className="temporal-popup-body">
          <p>Access from Desktop or Vic will sell your feet pics</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
