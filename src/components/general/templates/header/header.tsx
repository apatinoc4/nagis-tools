import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import Toolbar from "@mui/material/Toolbar";
const logoWhite = require("../../../../assets/general/main-logo/mainLogoWhite.svg");

const HEADER_LINKS = [
  { label: "HOME", linkTo: "/" },
  { label: "TOOLS", linkTo: "/review_tool" },
];

const Header = () => (
  <AppBar>
    <Container>
      <Toolbar>
        <div className="header-logo">
          <img src={logoWhite.default} alt="logoWhite" />
        </div>
        <Stack direction="row" spacing={2}>
          {HEADER_LINKS.map(({ label, linkTo }, index) => (
            <Link key={index} to={linkTo}>
              {label}
            </Link>
          ))}
        </Stack>
      </Toolbar>
    </Container>
  </AppBar>
);

export default Header;
