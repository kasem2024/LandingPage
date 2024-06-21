import "./SectionThree.css";
import Button, { ButtonSecondry } from "../../components/Buttons/Button";
import photo from "../../Images/LandPage/image-from-rawpixel-id-12543555-png.png";
const SectionThree = () => {
  return (
    <div className="sectionThree container">
      <div className="part1">
        <h1><em>Research & background, summary</em></h1>
        <p>
          Artificial Intelligence (AI) refers to the development of computer
          systems that can perform tasks that typically require human
          intelligence.
        </p>
      </div>
      <div className="part2">
        <div className="using">
          <h1>10m</h1>
          <h4>daily users</h4>
          <p>
            As of my last knowledge update in January 2022, the users of AI in
            daily life have been diverse and continually expanding
          </p>
          <ButtonSecondry>FreeTour</ButtonSecondry>
        </div>
        <div className="image">
          <img src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
