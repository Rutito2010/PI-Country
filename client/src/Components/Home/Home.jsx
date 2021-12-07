import React from "react";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";
import { allCountries } from "../../Actions/Actions";

import style from "./Home.module.css";
import Cards from "../Cards/Cards";

export default function Home() {
  const dispatch = useDispatch();
  // const { filteredCountries } = useSelector((state) => state);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [showCountries] = useState(10);
  // const indexLastC = currentPage * showCountries;
  // const indexFirstC = indexLastC - showCountries;
  // const actualCountries = filteredCountries.slice(indexFirstC, indexLastC);
  // const actualPage = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  function handleClick(e) {
    e.preventDefault();
    dispatch(allCountries());
  }
  useEffect(() => {
    dispatch(allCountries());
  }, [dispatch]);
  return (
    <div className={style.background}>
      <button
        className={style.button}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        All Countries
      </button>
      <SearchBar />
      <Filters />
      {/* { <div> */}
      {/* <button>
          <Link to="/CreateActivity">Create a New Activity</Link>
        </button> */}{" "}
      {/* </div> */}
      {/* {actualCountries?.map((e) => { */}
      {/* return ( */}
      <Cards />
      {/* ) */}
      {/* })} */}
      {/* <Pagination
        showCountries={showCountries}
        filteredCountries={filteredCountries.length}
        currentpage={currentPage}
        actualPage={actualPage}
      /> */}
    </div>
  );
}
