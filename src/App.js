import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contest from "./comp/Contest";
import Experience from "./comp/Experience";
import Introduce from "./comp/Introduce";
import Project from "./comp/Project";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header><h1 style={{ textAlign: "center",fontSize:"60px" }}>PORTFOLIO </h1></header>
      <navigation>
      <Router>
        <div >
          <div className="box">
          <Link to="/Introduce"className="upbox">
            Introduce 
          </Link>
          </div>
          
          <div className="box">
          <Link to="/Project" className="upbox">
          Project  
          </Link>
          </div>
          
          <div className="box">
            <Link to="/Contest" className="upbox">
          Contest  
          </Link>
          </div>
          
          <div className="box">
          <Link to="/Experience" className="upbox">
          Experience  
          </Link>
          </div>
          
        </div>

        <Routes>
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