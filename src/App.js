import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Content, Footer } from "./components/index";
import { LandPage, Log, FAQ, Bug, NewFeature,  About } from "./Pages/Pages";
import Contact from "./Pages/Contact-us/Contact";

const App = () => {
  return (
    <>
      <Router> 
      <Content>
        <Routes>
          <Route exact path="/" element={<LandPage />}/>
          {/* <Route exact path="/log" element={<Log />}/>  */}
          <Route exact path="/FAQ" element={<FAQ />}/> 
          <Route exact path="/Contact" element={<Contact />}/> 
          <Route exact path="/Bug" element={<Bug />}/>
          <Route exact path="/NewFeature" element={<NewFeature />}/>
          <Route exact path="/About" element={<About />}/>
        </Routes>
      </Content>
      <Footer /> 
    </Router>
   
    

      
    </>
  );
};

export default App;
