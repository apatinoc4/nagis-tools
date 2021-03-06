import { React, useState, useEffect, useRef, useContext } from "react";
import { ReportContext } from "../context/reportToolProvider";
import ReactToPrint from "react-to-print";
import "./reportTool.scss";
import InputFields from "../molecules/input-fields/inputFields";
import ReportPdf from "../molecules/report-pdf/reportPdf";
import Button from "@mui/material/Button";

const ReportTool = () => {
  const guildList = ["Krispy-Kreme", "Dunkin"];
  const { activeGuild, setActiveGuild } = useContext(ReportContext);
  const [reviewer, setReviewer] = useState({ reviwer: "" });
  const [activeState, setActiveState] = useState({});
  const [accountInfo, setAccountInfo] = useState({
    accName: "",
    accLevel: 0,
    units: "",
    espers: "",
    vcs: "",
    gear: "",
  });
  const [maxedStats, setMaxedStats] = useState({
    maxUnits: 0,
    maxEspers: 0,
    maxVcs: 0,
    maxGear: 0,
  });
  const [veredictInfo, setveredictInfo] = useState({
    conclusion: "",
  });

  const guildHandler = (event) => {
    setActiveGuild(event.target.value);
  };

  //ref used for pdf-print

  const ref = useRef(null);

  //manages visibility state of both inputs and preview based on window size and resizing

  const useWindowSize = () => {
    // detects initial device when rendering and sets visibility state accordingly

    useEffect(() => {
      if (window.innerWidth > 1024) {
        setActiveState({
          inputs: true,
          preview: true,
        });
      } else {
        setActiveState({
          inputs: true,
          preview: false,
        });
      }
    }, []);

    // sets visibility states on manual resize

    useEffect(() => {
      function handleResize() {
        if (window.innerWidth > 1024) {
          setActiveState({
            inputs: true,
            preview: true,
          });
        } else if (window.innerWidth < 1024) {
          setActiveState({
            inputs: true,
            preview: false,
          });
        }
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  };

  useWindowSize();

  // visibility toggle function for both input and preview when preview button is clicked

  const activeHandler = () => {
    let obj = { ...activeState };
    Object.keys(obj).forEach((keyElem) => (obj[keyElem] = !obj[keyElem]));
    setActiveState(obj);
  };

  return (
    <div className="p-reportTool-container">
      <div className="p-reportTool-header">
        <h1 className="p-reportTool-header--title">
          Nagi's Account Review Tool
        </h1>
        <p>
          with amazing designs from{" "}
          <a href="https://www.linkedin.com/in/jeremy-chasey/"> @Northbank</a>
        </p>
        <p className="p-reportTool-header--slogan">
          for Krispy-Kreme and Dunkin'
        </p>
        <div className="p-reportTool-header--guildselector">
          <p>Select a guild: </p>
          <select onChange={guildHandler}>
            {guildList.map((elem, i) => {
              return (
                <option value={elem} key={i}>
                  {elem}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div
        onClick={() => activeHandler()}
        className={`p-reportTool-previewbutton ${
          activeGuild === "Krispy-Kreme" ? "kk-outline" : "dunkin-outline"
        }`}
      >
        <div className="p-reportTool-previewbutton--innerdiv">
          {activeState.preview === false ? (
            <>
              <p>
                Preview <span>PDF</span>
              </p>
            </>
          ) : (
            <>
              <p>Hide Preview</p>
            </>
          )}
        </div>
      </div>
      <div className="p-reportTool-headerextender"></div>
      <div className="p-reportTool-mainbody">
        <div
          className={`p-reportTool-mainbody--inputfields ${
            activeState.inputs === false ? "hidden" : ""
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
              <Button onClick={() => console.log(ref.current)}>
                Generate PDF
              </Button>
            )}
            content={() => ref.current}
          />
        </div>
        <div
          className={`p-reportTool-mainbody--reportpreview ${
            activeState.preview === false ? "hidden" : ""
          }`}
        >
          <p className="p-reportTool-disclaimer">
            Preview for mobile visualization purposes, some proportions may vary
            slightly.
          </p>
          <ReportPdf
            ref={ref}
            reviewer={reviewer}
            accountInfo={accountInfo}
            maxedStats={maxedStats}
            veredictInfo={veredictInfo}
            activeGuild={activeGuild}
            activeState={activeState}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportTool;
