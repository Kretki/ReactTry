import React from "react";
import "./Page.css";

interface Props {
  pageNumber: number;
}

export default function Page({ pageNumber }: Props) {
  return (
    <div id={'p'+{pageNumber}} className="paper">
      <div className="front">
        <div id={'f'+{pageNumber}} className="front-content">
          <p id={'front'+{pageNumber}+'-p'}>Front 2</p>
        </div>
      </div>
      <div className="back">
        <div id={'b'+{pageNumber}} className="back-content">
          <p id={'back'+{pageNumber}+'-p'}>Back 2</p>
        </div>
      </div>
    </div>
  );
}
