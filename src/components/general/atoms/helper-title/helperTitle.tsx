import HelpIcon from "@mui/icons-material/Help";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";
import React from "react";

import "./helperTitle.scss";

interface HelperTitleProps extends Omit<TooltipProps, "title"> {
  className?: string;
  title: string;
  tooltipArrow?: TooltipProps["arrow"];
  tooltipClassName?: TooltipProps["className"];
  tooltipTitle?: TooltipProps["title"];
  tooltipPlacement?: TooltipProps["placement"];
}

const HelperTitle = ({
  className,
  title,
  tooltipArrow,
  tooltipClassName,
  tooltipPlacement,
  tooltipTitle,
  ...tooltipProps
}: HelperTitleProps) => {
  return (
    <div className={`a-helperText-container ${className}`}>
      <h2>{title}</h2>
      <Tooltip
        arrow={tooltipArrow}
        className={`${tooltipClassName ? tooltipClassName : ""} helper-tooltip`}
        placement={tooltipPlacement}
        title={tooltipTitle}
        {...tooltipProps}
      >
        <HelpIcon />
      </Tooltip>
    </div>
  );
};

export default HelperTitle;
