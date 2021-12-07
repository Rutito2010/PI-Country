import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";
export default function Landing() {
  return (
    <div className={style.background}>
      <ul>
        <h1>COUNTRY APP</h1>
        <Link to="/home">
          <button className={style.button}>Let's see the world!!</button>
        </Link>{" "}
      </ul>
    </div>
  );
}
