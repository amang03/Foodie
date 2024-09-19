import { Link } from "react-router-dom";
import Logo from "../images/foodcrave-final.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article className="footer__article">
          <Link to="/" className="logo ">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            <strong>FoodCrave</strong> is an AI-based meal subscription website
            that ensures quality food and seamless delivery to your doorstep.
            Their personalized meal plans cater to your dietary preferences,
            using fresh ingredients and reliable logistics. Satisfy your
            cravings with convenience and assurance, all in one place.
          </p>
          <div className="footer__socials">
            <a
              href="http://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="http://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="http://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="http://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article className="footer__links">
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/meals">Meals</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article className="footer__links">
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article className="footer__links">
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small className="footer__ctext">Designed By Aman Gupta</small>
      </div>
    </footer>
  );
};

export default Footer;
