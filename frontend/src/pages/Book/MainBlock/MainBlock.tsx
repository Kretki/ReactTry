import React from "react";
import Canvas from "./Canvas/Canvas.tsx";
import HeaderBubbles from './HeaderBubbles.tsx'
import './MainBlock.css'

interface Props {
  height: number;
  width: number;
}

export default function MainBlock({ height, width }: Props) {
  const cornerWidth = 20
  const cornerHeight = 100
  return (
    <div id="main-block">
      <HeaderBubbles left={width/2-2*cornerWidth} top={-cornerHeight+2*cornerWidth}/>
      <ul id="text-header-outliner">
        <li id="left-corner-u" style={{width: cornerWidth}}></li>
        <li id="header-liner-u" style={{width: width, top: -cornerHeight+cornerWidth}}></li>
        <li id="right-corner-u"></li>
      </ul>
      <Canvas height={height} width={width} widthCorn={cornerWidth} left={cornerWidth+3} top={-cornerHeight+cornerWidth}/>
      <ul id="text-bottom-outliner" style={{ top: -2*cornerHeight+2*cornerWidth+7 }}>
        <li id="left-corner-b"></li>
        <li id="header-liner-b" style={{width: width }}></li>
        <li id="right-corner-b"></li>
      </ul>
    </div>
  );
}
