import React from "react";
import './HeaderBubbles.css'

function openBook(){
  document.getElementById("header-liner-u").style.transform = "scaleX(2) translateX(-8px)"
  document.getElementById("header-liner-b").style.transform = "scaleX(2) translateX(-8px)"
  // document.getElementById("right-corner-u").style.transform = "translateX("+(retValParam("header-liner-u").width/2-16)+"px)"
  // document.getElementById("left-corner-u").style.transform = "translateX("+(-retValParam("header-liner-u").width/2-16)+"px)"
  // document.getElementById("canvas").style.transform = "translateX("+(retValParam("header-liner-u").width/2-17)+"px)"
  // document.getElementById("right-corner-b").style.transform = "translateX("+(retValParam("header-liner-b").width/2-16)+"px)"
  // document.getElementById("left-corner-b").style.transform = "translateX("+(-retValParam("header-liner-b").width/2-16)+"px)"
  // document.getElementById("block-notes").style.transform = "translateX("+(retValParam("header-liner-u").width/2-retValParam("right-corner-b").width+5)+"px)"
}

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
        <div id="right-arrow" onClick={openBook}></div>
      </li>
    </ul>
  );
}
