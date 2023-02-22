import React, { createContext, useState } from "react";

export const ReportContext = createContext();

const ReportProvider = ({ children }) => {
  const [activeGuild, setActiveGuild] = useState("Krispy-Kreme");
  const [reviewInfo, setReviewInfo] = useState({
    reviwer: "",
    accName: "",
    accLevel: 0,
    maxUnits: 0,
    maxEspers: 0,
    maxVcs: 0,
    maxGear: 0,
    units: "",
    espers: "",
    vcs: "",
    gear: "",
    conclusion: "",
  });

  // Values for minimum requirements and amazing requirements

  const amazing = {
    units: activeGuild === "Krispy-Kreme" ? 32 : 6,
    espers: activeGuild === "Krispy-Kreme" ? 23 : 5,
    vcs: activeGuild === "Krispy-Kreme" ? 20 : 3,
    gear: activeGuild === "Krispy-Kreme" ? 40 : 8,
  };

  const minimum = {
    units: activeGuild === "Krispy-Kreme" ? 16 : 3,
    espers: activeGuild === "Krispy-Kreme" ? 14 : 3,
    vcs: activeGuild === "Krispy-Kreme" ? 10 : 1,
    gear: activeGuild === "Krispy-Kreme" ? 20 : 4,
  };
  return (
    <ReportContext.Provider
      value={{
        activeGuild,
        amazing,
        minimum,
        reviewInfo,
        setActiveGuild,
        setReviewInfo,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export default ReportProvider;
