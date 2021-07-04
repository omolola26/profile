import React from "react"
import "./style.css";
import Data from "./Profile/Data";
import profilepic from "./images/profilepic.jpg"




function App() {
  const setStyle = {paddingLeft: "400px"}
  const imgStyle = {borderRadius: "50px",   boxShadow: "rgba(0,0,0,0.7)"}
  return (
    <div style={setStyle}>
<Data >
  <img src={profilepic} style={imgStyle} alt="pic"/>
  </Data>

    </div>
  );
}

export default App;
