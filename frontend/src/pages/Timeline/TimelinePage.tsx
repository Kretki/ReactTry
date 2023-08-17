import React, { useState } from "react";
import Header from "../Header.tsx";
import Timeline from "./Timeline.tsx";

export default function TimelinePage() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const getHeaderHeight = (height: number) => {
    setHeaderHeight(height);
  };

  return (
    <>
      <Header headText="История" onGetHeight={getHeaderHeight} />
      <Timeline headerHeight={headerHeight} />
    </>
  );
}
