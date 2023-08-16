import React from "react";
import './HeaderBubbles.css'

interface Props {
    left: number;
    top: number;
  }

export default function HeaderBubbles({ left, top }: Props) {
  return (
    <ul id="header-bubbles" style={{left: left+15, top: top+20}}>
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
  );
}
