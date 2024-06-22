import "./SectionFour.css";
import picture from "../../Images/LandPage/Picsart1.png";
// import picture from "../../Images/LandPage/Picsart_23-12-07_20-21-01-324.jpg";
import { ButtonSecondry } from "../../components/Buttons/Button";

const SectionFour = () => {
  return (
    <div className="SectionFour ">
      <div className="ifmge">
        <img src={picture} alt="" />
      </div>
      <div className="unlock">
        <h1>
          <em>Unlock your creative potental </em>
        </h1>
        <p>
          Ac feugiat ante. Donec ultricies lobortis eros, nec auctor nisl semper
          ultricies. Aliquam sodales nulla dolor. Curabitur non bibendum ligula
          Ac feugiat ante. Donec ultricies lobortis eros, nec auctor nisl semper
          ultricies. Aliquam sodales nulla dolor. Curabitur non bibendum ligula
        </p>
        <ButtonSecondry><a href="https://platform.openai.com/docs/introduction">Learn More</a></ButtonSecondry>
      </div>
    </div>
  );
};

export default SectionFour;
