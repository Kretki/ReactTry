import React from "react";
import FirstPage from "./FirstPage.tsx";
import Page from "./Page.tsx";
import "./Canvas.css";

export default function Canvas() {
  const heightSc = window.screen.height*0.6
  return (
    <div id="canvas" style={{height: heightSc, width: heightSc/108*82}}>
      <FirstPage />
      <Page pageNumber={2} />
      <Page pageNumber={3} />
      <Page pageNumber={4} />
      <Page pageNumber={5} />
    </div>
  );
}
