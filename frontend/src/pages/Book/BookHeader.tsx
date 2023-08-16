import React from "react";
import './BookHeader.css'

export default function BookHeader() {
  return (
    <ul className="head-list">
      <li id="li-menu">
        <button id="main-menu"></button>
      </li>
      <li id="li-head">
        <div className="head-menu">
          <button id="set-reading" style={{left: window.screen.width/1.5}}>Start reading</button>
          <button id="set-hint" style={{left: window.screen.width/1.5+10}}>Set text</button>
          <button id="save-file" style={{left: window.screen.width/1.5+20}}>Save file</button>
        </div>
      </li>
    </ul>
  );
}
