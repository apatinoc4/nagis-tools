import "./footer.scss";
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
            <a href="https://www.instagram.com/apatinoc4/">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/andrespatino1993/">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/apatinoc4">
              <GitHubIcon />
            </a>
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
