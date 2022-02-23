import React, { createContext, useState } from "react";

export const ReportContext = createContext();

const ReportProvider = ({ children }) => {
  const [activeGuild, setActiveGuild] = useState("Krispy-Kreme");

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
      value={{ activeGuild, setActiveGuild, amazing, minimum }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export default ReportProvider;
