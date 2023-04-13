import "./footer.scss";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <div className="t-footer-container">
        <div className="t-footer-contact">
          <p>Have some fun ideas for a project?</p>
          <a href="mailto: apatinoc4@gmail.com">
            <button>Hit me up!</button>
          </a>
        </div>
        <div className="t-footer-body">
          <div className="t-footer-socialmedia">
            <IconButton
              target="_blank"
              href="https://www.instagram.com/apatinoc4/"
            >
              <InstagramIcon fontSize="medium" />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/in/andrespatino1993/"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton target="_blank" href="https://github.com/apatinoc4">
              <GitHubIcon />
            </IconButton>
          </div>
        </div>
        <div className="t-footer-copyright">
          <p className="t-footer-copyright--copy">
            Copyright &copy; {getCurrentYear()}
          </p>
          <p className="t-footer-copyright--name">Andrés Patiño</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
