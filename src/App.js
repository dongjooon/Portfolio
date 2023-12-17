import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./comp/Index";
import Contest from "./comp/Contest";
import Experience from "./comp/Experience";
import Introduce from "./comp/Introduce";
import Project from "./comp/Project";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1 style={{ textAlign: "center",fontSize:"60px", position:"absolute", left:"630px"}}>PORTFOLIO </h1>
        <div style={{position:"absolute", left:"628px" ,top:"100px", fontSize:"30px"}}>ABOUT DONGJUN SHIN</div>
      </header>
      <navigation>
      <Router>
        <div >
          <div className="box" style={{top:"150px"}}>
          <Link to="/Intro"className="upbox">
            Introduce 
          </Link>
          </div>
          
          <div className="box"  style={{top:"200px"}}>
          <Link to="/Project" className="upbox">
          Project  
          </Link>
          </div>

          <div className="box" style={{top:"250px"}}>
            <Link to="/Contest" className="upbox">
          Contest  
          </Link>
          </div>
          
          <div className="box" style={{top:"300px"}}>
          <Link to="/Experience" className="upbox">
          Experience  
          </Link>
          </div>
          
        </div>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Introduce/*" element={<Introduce />} />
          <Route path="/Project/*" element={<Project />} />
          <Route path="/Contest/*" element={<Contest />} />
          <Route path="/Experience/*" element={<Experience />} />
        </Routes>
    </Router> 
    </navigation>
      
    </div>
  );
}

export default App;