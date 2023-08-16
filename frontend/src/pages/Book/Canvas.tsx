import React from "react";
import FirstPage from "./FirstPage.tsx";
import Page from "./Page.tsx";
import "./Canvas.css";

interface Props {
  height: number;
  width: number;
  widthCorn: number;
  left: number;
  top: number;
}

export default function Canvas({ height, width, widthCorn, left, top }: Props) {
  return (
    <div id="canvas" style={{height: height, width: width-2*widthCorn, left:left, top: top}}>
      <FirstPage />
      <Page pageNumber={2} />
      <Page pageNumber={3} />
      <Page pageNumber={4} />
      <Page pageNumber={5} />
    </div>
  );
}
