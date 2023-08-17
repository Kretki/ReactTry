import React from "react";
import MainBlock from "./MainBlock/MainBlock.tsx";
import BookHeader from "./BookHeader.tsx";
import BlockNotes from './NotesBlock/BlockNotes.tsx'
import './Book.css'

export default function Book() {
  const height = window.screen.height*0.6
  const width = height/108*82
  return (
    <>
      <BookHeader />
      <div id="main-container" style={{left: window.screen.width/2-width/2, top:150}}>
        <MainBlock height={height} width={width} />
        <BlockNotes width={width}/>
      </div>
    </>
  );
}
