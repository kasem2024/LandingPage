import { Header } from "../../components";
import ParticlesComponent from "../../components/ParticlesComponent";
import Textarea from "../Contact-us/Textarea";
import { Feature } from "../Contact-us/information_contact";
import "./NewFeature.css"
import Button from './../../components/Buttons/Button';

const NewFeature = () => {

  const NewFeatured = Feature.map((inputs) => {
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
  return (
    <div className="App">
      <Header />

      <ParticlesComponent id="particles" />
      <div className="lk dark">{NewFeatured}</div>
      <Button className="Button">
        <a href="mailto:bn866544@gmail.com">Send </a>
      </Button>
    </div>
  );
};

export default NewFeature