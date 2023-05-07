export type ReviewInfo = {
  reviewer: string;
  accName: string;
  accLevel: number;
  maxUnits: number;
  maxEspers: number;
  maxVcs: number;
  maxGear: number;
  units: string;
  espers: string;
  vcs: string;
  gear: string;
  conclusion: string;
  [key: string]: string | number;
};
