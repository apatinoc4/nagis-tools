import { ChangeEvent, useState, useRef, useContext } from "react";
import { ReportContext } from "../context/reportToolProvider";
import ReactToPrint from "react-to-print";
import "./reportTool.scss";
import InputFields from "../molecules/input-fields/inputFields";
import ReportPdf from "../molecules/report-pdf/reportPdf";
import Button from "@mui/material/Button";
import { ViewportContext } from "../../general/context/viewPortProvider";
import ConditionalWrapper from "../../general/molecules/conditional-wrapper/conditionalWrapper";
const ffLogo = require("../../../assets/account_review_tool/backgrounds/ff-logo.png");

const GUILD_LIST: string[] = ["Krispy-Kreme", "Dunkin"];

const ReportTool = () => {
  const { activeGuild, setActiveGuild } = useContext(ReportContext);
  const [previewView, setPreviewView] = useState<boolean>(false);
  const viewport = useContext(ViewportContext);

  const isMobile = viewport === "mobile";

  const guildHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setActiveGuild(event.target.value);
  };

  //ref used for pdf-print
  const ref = useRef(null);

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
            {GUILD_LIST.map((elem, index) => {
              return (
                <option value={elem} key={index}>
                  {elem}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="p-reportTool-headerextender"></div>
      <div className="p-reportTool-mainbody">
        <ConditionalWrapper
          condition={isMobile}
          wrapper={(children: any) => (
            <div
              className={`p-reportTool-mainbody--mobileInputs ${
                previewView ? "hidden" : ""
              }`}
            >
              {children}
            </div>
          )}
        >
          <div className="p-reportTool-mainbody--inputfields">
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
        </ConditionalWrapper>
        <ConditionalWrapper
          condition={isMobile}
          wrapper={(children: any) => (
            <div className={`${!previewView ? "hidden" : ""}`}>{children}</div>
          )}
        >
          <div className={"p-reportTool-mainbody--reportpreview"}>
            {isMobile && (
              <p className="p-reportTool-disclaimer">
                Preview for mobile visualization purposes, some proportions may
                vary slightly.
              </p>
            )}
            <ReportPdf
              activeGuild={activeGuild}
              previewView={previewView}
              ref={ref}
            />
          </div>
        </ConditionalWrapper>
      </div>
      {isMobile && (
        <div
          className={`p-reportTool-previewbutton ${
            activeGuild === "Krispy-Kreme" ? "kk-outline" : "dunkin-outline"
          }`}
        >
          <Button
            className="report-tool-preview-button"
            onClick={() => setPreviewView(!previewView)}
          >
            {!previewView ? (
              <p>
                Preview <span>PDF</span>
              </p>
            ) : (
              <p>Hide Preview</p>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ReportTool;
