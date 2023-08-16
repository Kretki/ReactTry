import React from "react";
import MainBlock from "./MainBlock";
import BookHeader from "./BookHeader";
import './Book.css'

export default function Book() {
  return (
    <>
      <BookHeader />
      <div id="main-container">
        <MainBlock />
      </div>
    </>
  );
}
