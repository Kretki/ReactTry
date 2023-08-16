import React from "react";
import Canvas from "./Canvas.tsx";
import './MainBlock.css'

export default function MainBlock() {
  return (
    <div id="main-block">
      <ul id="header-bubbles">
        <li>
          <div id="left-arrow"></div>
        </li>
        <li>
          <div id="center-bubble">
            <div id="light-center"></div>
            <div id="bottom-bubbles-back"></div>
          </div>
        </li>
        <li>
          <div id="right-arrow"></div>
        </li>
      </ul>
      <ul id="text-header-outliner">
        <li id="left-corner-u"></li>
        <li id="header-liner-u"></li>
        <li id="right-corner-u"></li>
      </ul>
      <Canvas />
      <ul id="text-bottom-outliner">
        <li id="left-corner-b"></li>
        <li id="header-liner-b"></li>
        <li id="right-corner-b"></li>
      </ul>
    </div>
  );
}
