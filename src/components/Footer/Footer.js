import "./Footer.css";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="py-5 bg-dark text-white text-center">
      <div className="container">
        <div className="row  border-bottom part1Footer">
          <div className="col-md py-2">
            <h1>
              <a href="/">
                <em>W</em>izard
              </a>
            </h1>
          </div>
          <div className="col-md py-2">
            <h2 className="">Similar sites</h2>
            <ul className="navbar-nav ">
              <li>
                <Link
                  to="https://openai.com/chatgpt"
                  target="_blank"
                  className="nav-link  light "
                >
                  GPT
                </Link>
              </li>
              <li>
                <Link
                  to="https://elicit.com/"
                  target="_blank"
                  className="nav-link"
                >
                  Elicit
                </Link>
              </li>
              <li>
                <Link to="https://poe.com/"
                 target="_blank">
                  Poe
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md py-2">
            <h2>Resources</h2>
            <ul className="navbar-nav ">
              
              <li>
                <a href="/About" >
                  About
                </a>
              </li>
              <li>
              <a href="/FAQ">
                  FAQ
                </a>
              </li>
      
            </ul>
          </div>
          <div className="col-md py-2">
            <h2>Help & Support</h2>
            <ul className="navbar-nav ">
              <li>
                <a href="/Contact">Contact Us</a>
              </li>
              
              <li>
                <a href="/Bug">
                  Report a Bug
                </a>
              </li>
              <li>
                <Link href="/NewFeature">
                  
                  Report a NewFeature
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="part2Footer">
          <p className="d-flex   ">© 2024 , Inc. All rights reserved.</p>
          <ul class="list-unstyled icons">
            <li class="ms-3">
              <a className="icon youtube" href="#">
                <FaYoutube />
              </a>
            </li>
            <li class="ms-3">
              <a className="icon facebook" href="#">
                <TiSocialFacebookCircular />
              </a>
            </li>
            <li class="ms-3">
              <a className="icon github" href="#">
                <TiSocialGithubCircular />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
