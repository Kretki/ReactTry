import React from "react";
import './BlockNotes.css'

export default function BlockNotes() {
  return (
    <div id="block-notes">
      <div id="open-notes">
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
