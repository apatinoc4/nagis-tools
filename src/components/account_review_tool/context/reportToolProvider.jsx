import React, { createContext, useState } from "react";

export const ReportContext = createContext();

const ReportProvider = ({ children }) => {
  const [activeGuild, setActiveGuild] = useState("Krispy-Kreme");

  // Values for minimum requirements and amazing requirements

  const amazing = {
    units: activeGuild === "Krispy-Kreme" ? 25 : 6,
    espers: activeGuild === "Krispy-Kreme" ? 20 : 5,
    vcs: activeGuild === "Krispy-Kreme" ? 15 : 3,
    gear: activeGuild === "Krispy-Kreme" ? 35 : 8,
  };

  const minimum = {
    units: activeGuild === "Krispy-Kreme" ? 14 : 3,
    espers: activeGuild === "Krispy-Kreme" ? 12 : 3,
    vcs: activeGuild === "Krispy-Kreme" ? 7 : 1,
    gear: activeGuild === "Krispy-Kreme" ? 18 : 4,
  };
  return (
    <ReportContext.Provider
      value={{ activeGuild, setActiveGuild, amazing, minimum }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export default ReportProvider;
