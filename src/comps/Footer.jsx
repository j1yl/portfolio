import "../css/Footer.scss";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer_container">
      <a href="mailto: lefodev@gmail.com">lefodev@gmail.com</a>
      <div className="social_container">
        <SocialIcon
          url="https://github.com/j1yl"
          fgColor="#000000"
          bgColor="#ffffff"
          className="social-icon"
        />
        <SocialIcon
          url="https://linkedin.com/lefodev"
          fgColor="#000000"
          bgColor="#ffffff"
          className="social-icon"
        />
        <SocialIcon
          url="https://twitter.com/lefodev"
          fgColor="#000000"
          bgColor="#ffffff"
          className="social-icon"
        />
      </div>
    </div>
  );
};

export default Footer;
