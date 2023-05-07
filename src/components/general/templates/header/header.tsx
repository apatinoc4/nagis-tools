import AppBar from "@mui/material/AppBar";
import BurgerMenu from "./components/burgerMenu";
import Container from "@mui/material/Container";
import { GENERAL_LINKS, TOOLS_LINKS } from "./constants/headerLinks";
import { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import { ViewportContext } from "../../context/viewPortProvider";

import "./header.scss";
const logoWhite = require("../../../../assets/general/main-logo/mainLogoWhite.svg");

const Header = () => {
  const viewport = useContext(ViewportContext);
  const isMobile = viewport === "mobile";

  return (
    <AppBar>
      <Container>
        <Toolbar className={`${isMobile ? "mobile" : ""}`}>
          <div className="header-logo">
            <img src={logoWhite.default} alt="logoWhite" />
          </div>
          {isMobile ? (
            <>
              <BurgerMenu />
            </>
          ) : (
            <Stack direction="row" spacing={2}>
              {GENERAL_LINKS.map(({ label, linkTo }, index) => (
                <HashLink key={index} to={linkTo}>
                  {label}
                </HashLink>
              ))}
              <span>|</span>
              {TOOLS_LINKS.map(({ label, linkTo }, index) => (
                <HashLink key={index} to={linkTo}>
                  {label}
                </HashLink>
              ))}
            </Stack>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
