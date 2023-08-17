import React, { useState, useEffect, useRef } from "react";
import './BlockNotes.css';

interface Props {
  width: number;
}

export default function BlockNotes({ width }: Props) {
  const [notesWidth, setNotesWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setNotesWidth(ref.current.clientWidth)
  }, [])

  function openNotes(){
    console.log(notesWidth)
    if(notesWidth<50){
      document.getElementById("main-container").style.transform = "translateX(-40%)"
      document.getElementById("open-notes").style.backgroundColor = "#2E1F49"
      document.getElementById("notes-arrow").style.transform = "rotate(180deg)"
    }
    else{
      console.log("and")
      document.getElementById("main-container").style.transform = "translateX(0%)"
      document.getElementById("open-notes").style.backgroundColor = "#1b112c"
      document.getElementById("notes-arrow").style.transform = "rotate(0deg)"
    }
  }

  return (
    <div id="block-notes" ref={ref} style={{width: width+60}}>
      <div id="open-notes" onClick={openNotes}>
        <div id="notes-arrow"></div>
      </div>
      <div id="dropdown-outer">
        <ul id="dropdown-notes">
          <li id="quotes-text-name">Quotes</li>
          <li id="quotes-text-container">
            <ul id="quotes-section">
              <li>
                <div id="choose-quotes">
                  <div id="dropdown-quotes-name">Choose quotes</div>
                  <div id="arrow-down-quotes"></div>
                </div>
              </li>
              <li id="quotes-editor-li">
                <div id="quotes-text-editor" contentEditable="false"></div>
                <div id="accept-note">Accept</div>
              </li>
              <li id="li-saved-notes">
                <div id="outer-saved">
                  <ul id="saved-notes">
                    <li id="add-note" className="notes">
                      Add note
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>
          <li id="block-scheme-name">Block Scheme</li>
          <li id="block-scheme-editor"></li>
        </ul>
      </div>
    </div>
  );
}
