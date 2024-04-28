import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import moment from "moment";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  const currentDate = moment();
  const currentYear = currentDate.format("YYYY");
  return (
    <footer className="footer-container">
      <div className="footer-details">
        <div>
          <h3>
            <Link>Lumevo</Link>
          </h3>
          <p>
            SOP Maker is India's most trusted SOP writing services brand. With
            over 8000 successful cases we have done, we are proud to share that
            SOP Maker is backed and supported with India's highly experienced
            SOP writers.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/">About Us</Link>
          <Link href="/">Our Achievements</Link>
          <Link href="/">Contact Us</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div>
          <h3>Contact Us</h3>
          <Link href="+919487XXXXX">+919487XXXXX</Link>
          <Link href="testing@gmail.com">testing@gmail.com</Link>
          <p>SSN College of Engineering, Kalavakkam , Chennai-603110.</p>
        </div>
        <div>
          <h3>Help</h3>
          <Link href="/">Help Me</Link>
          <Link href="/">Feedback</Link>
          <Link href="/">Report an issue</Link>
        </div>
      </div>

      <div className="social-icons">
        <Link>
          <FacebookIcon />
        </Link>
        <Link>
          <XIcon />
        </Link>
        <Link>
          <WhatsAppIcon />
        </Link>
        <Link>
          <LinkedInIcon />
        </Link>
      </div>
      <div className="copyright-details">
        <hr className="line"></hr>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#4a4a4a",
          }}
        >
          <span>Copyright</span>
          <CopyrightIcon style={{ alignSelf: "center", marginLeft: "5px" }} />
          {currentYear} - Lumevo
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
