import { Header } from "../../components";
import "./FAQ.css";
import FaqData from "./FaqData";
import Information from "./Information";
const FAQ = () => {
  const MapFaq = Information.map((faqs) => {
    return <FaqData key={faqs.id} Q={faqs.Q} ans={faqs.ans} />;
  });
  return (
    <div className="black">
      <Header/>
    
    <section className="FaqPage">
      <h1>FAQs</h1>
     {MapFaq}
    </section>
    </div>
  );
};

export default FAQ;
