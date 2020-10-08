import React from "react";
import "../css/Service.css";
const Service = () => {
    const styles = {
        background: "#9b59b6",
        paddingLeft: -50,
        borderRadius: 15,
    }
    
  return (
      <>
      <h1> Service </h1>
    <div className="container" style={styles}>
    <div className="item">
      <h1>Items 1 </h1>
      <label>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React Js</li>
            <li>React Native</li>
        </ul>
      </label>
    </div>
    <div className="item">
      <h1>Items 2 </h1>
      <ul>
      <ul>
            <li>Photoshop</li>
            <li>illustrator</li>
            <li>premiere</li>
            <li>lightroom</li>
            <li>audition</li>
        </ul>
      </ul>
    </div>
    <div className="item">
      <h1>Items 3 </h1>
      <ul>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
            <li>C#</li>
            <li>PHP</li>
        </ul>
    </div>
  </div>
  </>
  )
};
export default Service;
