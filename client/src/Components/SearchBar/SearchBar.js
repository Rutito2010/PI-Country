import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../Actions/Actions";
import { Link } from "react-router-dom";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(searchByName(search));
    setSearch("");
  };

  const handleChange = async (e) => {
    await setSearch(e.target.value);
  };

  return (
    <div className={style.divStyle}>
      <input
        className={style.input}
        type="text"
        placeholder="Insert country..."
        value={search}
        onChange={(e) => handleChange(e)}
      />
      <button
        className={style.button}
        type="submit"
        onClick={(e) => handleClick(e)}
      >
        Search
      </button>
      <div>
        <button className={style.button2}>
          <Link className={style.createLink} to="/CreateActivity">
            Create a New Activity
          </Link>
        </button>
      </div>
    </div>
  );
}
