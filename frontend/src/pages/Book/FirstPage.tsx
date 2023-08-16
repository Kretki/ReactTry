import React from "react";
import "./Page.css";

export default function FirstPage() {
  return (
    <div id="p1" className="paper">
      <div className="front">
        <div id="f1" className="front-content">
          <h1 id="front-h1">Front 1</h1>
          <h3 id="front-h3">So</h3>
        </div>
      </div>
      <div className="back">
        <div id="b1" className="back-content">
          <p id="back1-p">Back 1</p>
        </div>
      </div>
    </div>
  );
}
