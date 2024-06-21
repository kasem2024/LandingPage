import "./SectionThree.css"; 
import './Card'
import Card from "./Card";
import informationCard from "./informationCard";

const photo = informationCard.map((inputs) => {
  return (
    <Card
      key={inputs.id}
      image={inputs.image}
      name={inputs.name}
      track={inputs.track}
      gmail={inputs.gmail}
    />
  );
});

const SectionThree = () => {
  return <div className="SectionThreeAbout">
    <div className="slide">
      <div className="FristSlide">{photo}</div>   
      <div className="SecondSlide">{photo}</div>
    </div>  
  </div>;
};

export default SectionThree;
