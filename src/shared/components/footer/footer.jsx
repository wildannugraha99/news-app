import { useContext } from "react";
import { myContext } from "App";

import "./footer.scss";

import linkedin from "assets/images/LinkedIn.svg";

const Footer = () => {
  const { theme } = useContext(myContext);
  return (
    <div className={theme ? "footer-darkmode" : "footer"}>
      <h4 className="footer-content">Created by Wildan, 2022</h4>
      <div className="footer-img-wrapper">
        <a
          href="https://www.linkedin.com/in/muhamad-wildan-n"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
