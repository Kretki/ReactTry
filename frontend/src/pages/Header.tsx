import React, { useEffect, useRef } from "react";
import "./Header.css";

interface Props {
  headText: string;
  onGetHeight: (height: number) => void;
}

export default function BookHeader({ headText, onGetHeight }: Props) {

  const ref = useRef(null)
  useEffect(() => {
    onGetHeight(ref.current.clientHeight)
  })

  return (
    <ul className="head-list" ref={ref}>
      <li id="li-menu">
        <button id="main-menu"></button>
      </li>
      <li id="li-head">
        <div className="head-menu">{headText}</div>
      </li>
    </ul>
  );
}
