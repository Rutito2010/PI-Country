import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  orderByPopulation,
  orderByName,
  filterByContinent,
  filterByActivity,
  allActivities,
} from "../../Actions/Actions";
import style from "./Filters.module.css";
export default function Filters() {
  const dispatch = useDispatch();
  const filterActivity = useSelector((state) => state.activity);
  // console.log(filterActivity);

  function handleClickROrder(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
  }
  function handleClickNOrder(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  }
  function handleClickByContinent(e) {
    e.preventDefault();
    dispatch(filterByContinent(e.target.value));
  }
  // function filterBy(e) {
  //   dispatch(filterByContinent(e.target.value));
  // }
  function handleClickByActivity(e) {
    e.preventDefault();
    dispatch(filterByActivity(e.target.value));
  }

  useEffect(() => {
    dispatch(allActivities());
  }, [dispatch]);
  return (
    <div className={style.divStyle}>
      <select className={style.filters} onChange={(e) => handleClickROrder(e)}>
        <option value="asc">Most Populated </option>
        <option value="desc">Less Poplated</option>
      </select>
      <select
        className={style.filters}
        name="continent"
        onChange={(e) => handleClickByContinent(e)}
      >
        <option value="All">Continent</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <select
        className={style.filters}
        onChange={(e) => {
          handleClickNOrder(e);
        }}
      >
        <option value="All"> Alphabetic</option>
        <option value="az"> A-Z</option>
        <option value="za"> Z-A</option>
      </select>
      <select
        className={style.filters}
        name="activity"
        onChange={(e) => handleClickByActivity(e)}
      >
        <option value="All">All Activities</option>
        {filterActivity?.map((e) => (
          <option value={e.name} key={e.name}>
            {e.name}
          </option>
        ))}
      </select>
    </div>
  );
}
