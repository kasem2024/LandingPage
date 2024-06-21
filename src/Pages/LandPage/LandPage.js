import './LandPage.css'
import { Header} from "../../components";
import {
  SectionOne,
  SectionTow,
  SectionThree,
  SectionFour,
} from "../../Sections/index";

const LnadPage = () => {
  return (
    <div className='landPage'>
    
      <Header />
      <SectionOne />
      <SectionTow />
      <SectionThree />
      <SectionFour/>
    </div>
  );
};

export default LnadPage;
