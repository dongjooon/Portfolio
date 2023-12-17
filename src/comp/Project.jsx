import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
function Project(){
    return (
        <div>
          
          <Link to="Project1" className="subox" style={{top:"185px"}}> Project1 </Link> <br />
          <Link to="Project2"className="subox" style={{top:"215px"}}> Project2 </Link> <br />
          
  
          <Routes>
            <Route path="Project1" Component={Project1} />
            <Route path="Project2" Component={Project2} />
          </Routes>
        </div>
      );
}
export default Project;