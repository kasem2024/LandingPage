import "./SectionOne.css";
import Button, { ButtonSecondry } from "../../components/Buttons/Button";
import logo from "../../Images/LandPage/heroImage.png";

const SectionOne = () => {
  return (
    <div className="section-one container">
      <div className="part1">
        <h1>
          <em>Artificial Intelligence</em> in our lives
        </h1>
        <p>
          Robots that carry artificial intelligence software today can serve
          industrial environments and carry out various tasks inside and outside
          the factory, without the need for permanent human intervention, and
          artificial intelligence is likely to become a technology{" "}
        </p>
        <div className="buttons">
          <ButtonSecondry className='.ButtonSecondry'>
            <a href="/log">Sign up </a>
          </ButtonSecondry>
          <ButtonSecondry>
            <a href="/log">Sign in </a>
          </ButtonSecondry>
        </div>
      </div>
      <div className="part2">
        <img src={logo} alt="AI" />
      </div>
    </div>
  );
};

export default SectionOne;
