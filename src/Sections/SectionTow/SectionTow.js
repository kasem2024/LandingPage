import "./SectionTow.css";
import picture1 from "../../Images/LandPage/ml.jpg";
import picture2 from "../../Images/LandPage/CV.jpg";
import picture3 from "../../Images/LandPage/DL.jpg";

const SectionTow = () => {
  return (
    <div className="sectionTow ">
      <div className="container">
        <h1><em>Artificial Intelligence departments</em></h1>
        <div className="The-depatments">
          <div className="column">
            <h4>Machine Learning</h4>
            <img src={picture1} alt="" />
            <p>
              Machine learning is a branch of artificial intelligence (AI) and
              computer science which focuses on the use of data and algorithms
              to imitate the way
            </p>
          </div>
          <div className="column">
            <h4>Computer Vision</h4>
            <div className="hj">
              <img src={picture2} alt="" />
            </div>
            <p>
              Computer vision is a field of AI that enables computers and
              systems to derive meaningful information from digital images,
              videos, and other visual inputs and take actions
            </p>
          </div>
          <div className="column">
            <h4>Deep Learning</h4>
            <img src={picture3} alt="" />
            <p>
              Deep learning is a method in artificial intelligence (AI) that teaches
              computers to process data in away that is inspired by the human brain.
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTow;
