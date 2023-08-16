import React from "react";
import './BookHeader.css'

export default function BookHeader() {
  return (
    <ul class="head-list">
      <li id="li-menu">
        <button id="main-menu"></button>
      </li>
      <li id="li-head">
        <div class="head-menu">
          <button id="set-reading">Start reading</button>
          <button id="set-hint">Set text</button>
          <button id="save-file">Save file</button>
        </div>
      </li>
    </ul>
  );
}
