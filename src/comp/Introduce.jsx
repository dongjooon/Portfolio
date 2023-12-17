import { useState } from "react";
import Password from "./Password";
import { Routes, Route, Link } from "react-router-dom";
import Self_Intro from "./Introduce/Self_Intro";
import Career from "./Introduce/Career";

const Introduce = () => {
  const [pwd, setPwd] = useState("");
  const changePwd = (e) => {
    setPwd(e.target.value);
  };
  if (pwd === "1111") {
    return (
      <div>
        <Link to="Self_Intro" className="subox" style={{top:"135px"}}> Self_Intro </Link> <br />
        <Link to="Career" className="subox" style={{top:"165px"}}> Career &nbsp;</Link>
        <Routes>
          <Route path="Self_Intro" Component={Self_Intro} />
          <Route path="Career" Component={Career} />
        </Routes>
      </div>
    );
  }else
    return (
      <Password pwd={pwd} changePwd={changePwd} />
    );
};
export default Introduce;