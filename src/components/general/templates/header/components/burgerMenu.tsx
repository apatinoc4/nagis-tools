import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { GENERAL_LINKS, TOOLS_LINKS } from "../constants/headerLinks";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

const BurgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <IconButton
        aria-label="menu"
        color="inherit"
        edge="end"
        onClick={handleMenu}
        size="large"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="tools-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        className="mobile-header-menu"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {GENERAL_LINKS.concat(TOOLS_LINKS).map(({ label, linkTo }, index) => (
          <HashLink key={index} to={linkTo}>
            <MenuItem
              className={`${
                index !== 0 && index !== 1 ? "tool-link" : "general-link"
              }`}
              onClick={() => setAnchorEl(null)}
            >
              {label}
            </MenuItem>
          </HashLink>
        ))}
      </Menu>
    </>
  );
};

export default BurgerMenu;
