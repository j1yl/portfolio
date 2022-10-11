import "../css/Footer.scss";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <a href="mailto: lefodev@gmail.com" className="email">
        lefodev@gmail.com
      </a>
      <div className="social-icon-container">
        <SocialIcon
          url="https://github.com/j1yl"
          fgColor="#3E4149"
          bgColor="#FF9999"
          className="social-icon"
        />
        <SocialIcon
          url="https://linkedin.com/lefodev"
          fgColor="#3E4149"
          bgColor="#FF9999"
          className="social-icon"
        />
        <SocialIcon
          url="https://twitter.com/lefodev"
          fgColor="#3E4149"
          bgColor="#FF9999"
          className="social-icon"
        />
      </div>
    </div>
  );
};

export default Footer;
