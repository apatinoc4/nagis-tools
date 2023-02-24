import { createContext, FC, ReactNode, useState } from "react";
import { ReviewInfo } from "../types/types";

type ReportProviderProps = {
  children: ReactNode;
};

type RatingValues = {
  [key: string]: number;
};

export interface ReportContextInterface {
  activeGuild: string;
  amazing: RatingValues;
  minimum: RatingValues;
  reviewInfo: ReviewInfo;
  setActiveGuild: (activeGuild: string) => void;
  setReviewInfo: (reviewInfo: ReviewInfo) => void;
}

const DEFAULT_CONTEXT_VALUES = {
  activeGuild: "Krispy-Kreme",
  amazing: {
    units: 32,
    espers: 23,
    vcs: 20,
    gear: 40,
  },
  minimum: {
    units: 16,
    espers: 14,
    vcs: 10,
    gear: 20,
  },
  reviewInfo: {
    reviewer: "",
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
  },
  setActiveGuild: () => {},
  setReviewInfo: () => {},
};

export const ReportContext = createContext<ReportContextInterface>(
  DEFAULT_CONTEXT_VALUES
);

const ReportProvider: FC<ReportProviderProps> = ({ children }) => {
  const [activeGuild, setActiveGuild] = useState<string>("Krispy-Kreme");
  const [reviewInfo, setReviewInfo] = useState<ReviewInfo>({
    reviewer: "",
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

  const amazing: RatingValues = {
    units: activeGuild === "Krispy-Kreme" ? 32 : 6,
    espers: activeGuild === "Krispy-Kreme" ? 23 : 5,
    vcs: activeGuild === "Krispy-Kreme" ? 20 : 3,
    gear: activeGuild === "Krispy-Kreme" ? 40 : 8,
  };

  const minimum: RatingValues = {
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
