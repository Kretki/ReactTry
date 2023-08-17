import React from "react";
import TimelineEl from "./TimelineEl.tsx";
import "./Timeline.css";

interface Props {
  headerHeight: number;
}

export default function Timeline({ headerHeight }: Props) {
  return (
    <div
      id="timeline-div"
      style={{
        width: window.innerWidth,
        height: window.innerHeight - headerHeight,
      }}
    >
      <ul id="timeline" style={{ width: window.innerWidth }}>
        <TimelineEl elementHeight={(window.innerHeight - headerHeight)/2} elTop={-(window.innerHeight - headerHeight)/2+20}/>
        <TimelineEl elementHeight={(window.innerHeight - headerHeight)/2} elTop={0}/>
      </ul>
    </div>
  );
}
