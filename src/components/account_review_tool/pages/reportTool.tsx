import { ChangeEvent, useState, useEffect, useRef, useContext } from "react";
import { ReportContext } from "../context/reportToolProvider";
import ReactToPrint from "react-to-print";
import "./reportTool.scss";
import InputFields from "../molecules/input-fields/inputFields";
import ReportPdf from "../molecules/report-pdf/reportPdf";
import Button from "@mui/material/Button";
import { ActiveState } from "../types/types";
const ffLogo = require("../../../assets/account_review_tool/backgrounds/ff-logo.png");

const GUILD_LIST: string[] = ["Krispy-Kreme", "Dunkin"];

const ReportTool = () => {
  const { activeGuild, setActiveGuild } = useContext(ReportContext);
  const [activeState, setActiveState] = useState<ActiveState>({});

  const guildHandler = (event: ChangeEvent<HTMLSelectElement>) => {
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
    let state = { ...activeState };
    Object.keys(state).forEach(
      (keyElem) =>
        (state[keyElem as keyof ActiveState] =
          !state[keyElem as keyof ActiveState])
    );
    setActiveState(state);
  };

  return (
    <div className="p-reportTool-container">
      <div className="p-reportTool-header">
        <img
          className="p-reportTool-header--fflogo"
          src={ffLogo}
          alt="fflogo"
        />
        <h1 className="p-reportTool-header--title">
          Nagi's Account Review Tool
        </h1>
        <p>
          with amazing designs from
          <a href="https://www.linkedin.com/in/jeremy-chasey/"> @Northbank</a>
        </p>
        <p className="p-reportTool-header--slogan">
          for Krispy-Kreme and Dunkin'
        </p>
        <div className="p-reportTool-header--guildselector">
          <p>Select a guild: </p>
          <select onChange={guildHandler}>
            {GUILD_LIST.map((elem, i) => {
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
          {!activeState.preview ? (
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
          <InputFields />
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
            activeGuild={activeGuild}
            activeState={activeState}
            ref={ref}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportTool;
