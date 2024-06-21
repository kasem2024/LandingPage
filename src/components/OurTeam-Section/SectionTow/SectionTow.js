import "./SectionTow.css";
import imageOne from "../../../Images/about/pexels-markus-spiske-965345.jpg";
import imageTow from "../../../Images/LandPage/iStock-1435014643.jpg";

const SectionTow = () => {
  return (
    <div className="SectionTowAbout">
    {/* <div className="mm"> */}
      
        <img src={imageOne} className="circle circleOne" alt="" />
        <img src={imageTow} className="circle circleTow" alt="" />
      {/* </div> */}
      <div className="articleAbout">
        <h2>Welcome to Wizard</h2>
        <p>
          At Wizard, we're on a mission to revolutionize the world through the
          power of Artificial Intelligence (AI). Our passion for innovation
          drives us to push the boundaries of what's possible, empowering
          businesses and individuals alike to unleash their full potential and
          shape the future. Step into a world where imagination meets reality,
          where AI solutions pave the way for endless possibilities. From
          automating mundane tasks to unlocking invaluable insights, our AI
          services are the catalyst for transformation, propelling you toward
          unprecedented levels of success.
        </p>
      </div>
    </div>
  );
};

export default SectionTow;
