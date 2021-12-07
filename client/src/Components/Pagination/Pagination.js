import React from "react";
import style from "./Pagination.module.css";
export default function Pagination({
  showCountries,
  filteredCountries,
  currentpage,
  actualPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCountries / showCountries); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={style.pagination}>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <button className={style.paginationButton} key={number}>
                {/* eslint-disable-next-line */}
                <a onClick={() => actualPage(number)}>{number}</a>
              </button>
            );
          })}
      </ul>
    </nav>
  );
}
