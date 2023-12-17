import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Contest1 from "./Contests/Contest1";
import Contest2 from "./Contests/Contest2";
function Contest(){
    return (
        <div>
          <Link to="Contest1" className="subox" style={{top:"235px"}}> Contest1 </Link> <br />
          <Link to="Contest2" className="subox" style={{top:"265px"}}> Contest2 </Link> <br />
  
          <Routes>
            <Route path="Contest1" Component={Contest1} />
            <Route path="Contest2" Component={Contest2} />
          </Routes>
        </div>
      );
}
export default Contest;