import Card from "../Card/Card";
import { useState } from "react";
import React from "react";
import { useSelector } from "react-redux";

import Pagination from "../Pagination/Pagination";

export default function Cards() {
  const { filteredCountries } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCountries] = useState(10);
  const indexLastC = currentPage * showCountries;
  const indexFirstC = indexLastC - showCountries;
  const actualCountries =
    filteredCountries.length > 1
      ? filteredCountries?.slice(indexFirstC, indexLastC)
      : filteredCountries;
  const actualPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <Pagination
        showCountries={showCountries}
        filteredCountries={filteredCountries.length}
        currentpage={currentPage}
        actualPage={actualPage}
      />
      {filteredCountries.length > 1 ? (
        actualCountries.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              image={e.image}
              continent={e.continent}
            />
          );
        })
      ) : filteredCountries.length <= 0 || filteredCountries[0] === null ? (
        <h2>Country not found</h2>
      ) : (
        filteredCountries.map((e) => {
          console.log(e);
          return (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              image={e.image}
              continent={e.continent}
            />
          );
        })
      )}
    </div>
  );
}
// { {
//   filteredCountries == null ? (
//     <h2>Country not found</h2>
//   ) : filteredCountries.length > 1 ? (
//     actualCountries.map((e) => {
//       return (
//         <Card
//           className={style.cards}
//           key={e.id}
//           id={e.id}
//           image={e.image}
//           name={e.name}
//           continent={e.continent}
//         />
//       );
//     })
//   )(
//     <h2>Country not found</h2>
//   ) : (
//     filteredCountries?.map((filteredCountries) => {
//       return (
//         <Card
//           className={style.cards}
//           key={filteredCountries.id}
//           id={filteredCountries.id}
//           name={filteredCountries.name}
//           image={filteredCountries.image}
//           types={filteredCountries.types}
//         />
//       );
//     })
//   ) */}
// <Card
//   key={filteredCountries.id}
//   id={filteredCountries.id}
//   image={filteredCountries.image}
//   name={filteredCountries.name}
//   continent={filteredCountries.continent}
// />
//     }
