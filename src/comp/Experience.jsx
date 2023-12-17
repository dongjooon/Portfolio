import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Volunteer from "./Experience/Volunteer";
import Motivation from "./Experience/Motivation";
function Experience(){
    return (
        <div>
          
          <Link to="Volunteer" className="subox" style={{top:"285px"}}> Volunteer </Link> <br />
          <Link to="Motivation" className="subox" style={{top:"315px"}}> Motivation </Link> <br />
  
          <Routes>
            <Route path="Volunteer" Component={Volunteer} />
            <Route path="Motivation" Component={Motivation} />
          </Routes>
        </div>
      );
}
export default Experience;