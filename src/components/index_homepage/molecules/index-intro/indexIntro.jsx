import React, { useEffect, useState } from "react";
import "./indexIntro.scss";
const logoWhite = require("../../../../assets/general/main-logo/mainLogoWhite.svg");

const IndexIntro = () => {
  const slogans = ["for fun", "to learn", "out of curiosity"];
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((second) => (second === 2 ? 0 : second + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="m-intro-container">
      <div className="m-intro-videoslogan">
        <video
          autoPlay
          loop
          muted
          src="https://nts-s3-introvid.s3.us-east-2.amazonaws.com/intro-vid.mp4"
        />
        <div className="m-intro-shaderbg">
          <h1>Welcome to</h1>
          <img src={logoWhite.default} alt="logoWhite" />
          <p className="m-intro-shaderbg--slogan1">stuff I make</p>
          <p className="m-intro-shaderbg--slogan2">{slogans[seconds]}</p>
        </div>
      </div>
    </div>
  );
};

export default IndexIntro;
