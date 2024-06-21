import "./Contact.css";
import { BsMoonStars } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import information_contact, { texx } from "./information_contact";
import InputContact from "./InputContact";
import Button from "../../components/Buttons/Button";
import { FaPaperclip } from "react-icons/fa";
import image from "../../Images/contact/pexels-engin-akyurt-15483667.jpg";
import { useState } from "react";
import Textarea from "./Textarea";
import { Link } from "react-router-dom";
const Contact = () => {
  const input_map = information_contact.map((inputs) => {
    return (
      <InputContact
        key={inputs.id}
        className={inputs.className}
        name={inputs.name}
        label={inputs.label}
        icon={inputs.icon}
      />
    );
  });

  const tttex = texx.map((inputs) => {
    return (
      <Textarea
        key={inputs.id}
        className={inputs.className}
        name={inputs.name}
        label={inputs.label}
        icon={inputs.icon}
      />
    );
  });

  const [Dark, setDark] = useState(false);
  const dark = Dark ? "dark" : "";

  return (
    <div className={dark}>
      <div className="background">
        <div className="contact">
          <div className="contain">
            <div className="home">
              <div className="Home_icon">
                <AiOutlineHome />
              </div>
              <Link to="/">
                <h4>
                  <em>W</em>izard
                </h4>
              </Link>
            </div>
            <div
              className="toggle_icon"
              onClick={() => {
                setDark(!Dark);
              }}
            >
              <div className="light_icon">
                <FaSun />
              </div>
              <div className="dark_icon">
                <BsMoonStars />
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="contain">
            <div className="left">
              <div className="form_Wrapper">
                <div className="contant_heading">
                  <h1>Contact Us For Your question</h1>
                  <p className="text">
                    Or reach us via :<a href="mailto:bn866544@gmail.com">Wizard@gimail.com</a>
                  </p>
                </div>
                <form
                  action="index.html"
                  method="post"
                  className="contact_form"
                >
                  {input_map}
                  {tttex}
                </form>
                <div className="contact-buttons">
                  <button className="btn upload">
                    <span>
                      <FaPaperclip /> attachement
                    </span>
                    <input type="file" name="attachement" />
                  </button>
                  <Button className="Button">
                    <a href="mailto:bn866544@gmail.com">Send </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="image-wrapper">
                <img src={image} className="image" />
              </div>
              <div className="wave-wrapper">
                <svg
                  className="wave"
                  viewBox="0 0 783 1536"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="wave"
                    d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"
                  />
                </svg>
              </div>
              <svg
                className="deshed-wave"
                viewBox="0 0 345 877"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="deshed-wave"
                  d="M0.5 876C25.6667 836.167 73.2 739.8 62 673C48 589.5 35.5 499.5 125.5 462C215.5 424.5 150 365 87 333.5C24 302 44 237.5 125.5 213.5C207 189.5 307 138.5 246 87C185 35.5 297 1 344.5 1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
