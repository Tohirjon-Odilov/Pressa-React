import React from "react";
import "./Online.scss";
import { online, offline } from "../../utils";

function Online() {
  return (
    <div className="online__wrapper">
      <span>
        <img src={online} alt="online" /> Online{" "}
        <input type="radio" name="isOnline" />
      </span>
      <span>
        <img src={offline} alt="offline" /> Offline{" "}
        <input type="radio" name="isOnline" />
      </span>
    </div>
  );
}

export default Online;
