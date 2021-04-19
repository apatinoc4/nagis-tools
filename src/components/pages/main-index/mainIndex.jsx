import { React, useState } from "react";
import "./mainIndex.scss";
import InputFields from "../../molecules/input-fields/inputFields";
import ReportPdf from "../../molecules/report-pdf/reportPdf";

const Index = () => {
  let [accOverview, setAccOverview] = useState("");
  return (
    <div className="p-index-container">
      <p>Nagis Test Tool</p>
      <div className="p-index-mainbody">
        <div className="p-index-mainbody--inputfields">
          <InputFields
            accOverview={accOverview}
            setAccOverview={setAccOverview}
          />
        </div>
        <div className="p-index-mainbody--reportpreview">
          <ReportPdf accOverview={accOverview} />
        </div>
      </div>
      <button>Download</button>
    </div>
  );
};

export default Index;
