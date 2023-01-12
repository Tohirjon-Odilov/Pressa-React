import React from "react";
import { facebook, instagram, telegram } from "../../Utils";
import "./style.scss";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer">
          <span>Pressa</span>
          <div>
            <p>Biz haqimizda</p>
            <p>Savol va Javoblar</p>
            <p>+71 200-11-02</p>
            <div className="social-wrapper">
              <img src={instagram} alt="instagram" />
              <img src={telegram} alt="telegram" />
              <img src={facebook} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
