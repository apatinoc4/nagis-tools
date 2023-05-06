import { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { ViewportContext } from "../../context/viewPortProvider";

import "./header.scss";
const logoWhite = require("../../../../assets/general/main-logo/mainLogoWhite.svg");

const HEADER_LINKS = [
  { label: "HOME", linkTo: "/" },
  { label: "TOOLS", linkTo: "/#project-section" },
];

const PROJECT_LINKS = [
  { label: "REVIEW TOOL", linkTo: "/review_tool" },
  { label: "UNIT PLANNER", linkTo: "/unit_planner" },
];

const Header = () => {
  const viewport = useContext(ViewportContext);
  const isMobile = viewport === "mobile";

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <div className="header-logo">
            <img src={logoWhite.default} alt="logoWhite" />
          </div>
          <Stack direction="row" spacing={2}>
            {HEADER_LINKS.map(({ label, linkTo }, index) => (
              <HashLink key={index} to={linkTo}>
                {label}
              </HashLink>
            ))}
            {!isMobile && (
              <>
                <span>|</span>
                {PROJECT_LINKS.map(({ label, linkTo }, index) => (
                  <HashLink key={index} to={linkTo}>
                    {label}
                  </HashLink>
                ))}
              </>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
