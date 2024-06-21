import { Header } from "../../components";
import Button from "../../components/Buttons/Button";
import ParticlesComponent from "../../components/ParticlesComponent";
import Textarea from "../Contact-us/Textarea";
import { Buged } from "../Contact-us/information_contact";
import "./Bug.css";

const Bug = () => {
  const reportBug = Buged.map((inputs) => {
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
      <div className="lk dark">{reportBug}</div>
      <Button className="Button">
        <a href="mailto:bn866544@gmail.com">Send </a>
      </Button>
    </div>
  );
};

export default Bug;
