import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { idCountry } from "../../Actions/Actions";

import style from "./Card.module.css";
export default function Card(e) {
  const dispatch = useDispatch();
  let name = e.name !== undefined ? e.name.toUpperCase() : "Not Found";
  return (
    <div className={style.card}>
      <Link
        onClick={() => dispatch(idCountry(e.id))}
        to={"/Country/" + e.id}
        className={style.Link}
      >
        <img className={style.image} src={e.image} alt="Not found Img" />
        <p>{name} </p>
        <p>{e.continent}</p>
      </Link>
    </div>
  );
}
