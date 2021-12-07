import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { idCountry } from "../../Actions/Actions";
import style from "./Country.module.css";

export default function Country(props) {
  const dispatch = useDispatch();
  const {
    match: { params },
  } = props;

  let id = params.id;

  const theCountry = useSelector((state) => state.details);
  // let area = theCountry.area / 1000;
  // let population = theCountry.population / 1000000;
  console.log(theCountry.name);
  useEffect(() => {
    console.log(id);
    dispatch(idCountry(id));
  }, [dispatch, id]);

  let name =
    theCountry.name !== undefined ? theCountry.name.toUpperCase() : "Not Found";

  return theCountry !== undefined ? (
    <div className={style.background}>
      <div className={style.head}>
        <h1 className={style.h1}>{name}</h1>
        <img
          className={style.image}
          src={theCountry.image}
          alt="No Flag Founded"
        />
      </div>
      <div className={style.data}>
        <h2 className={style.h2}>Continent:{theCountry.continent}</h2>
        <h3 className={style.h3}>Capital:{theCountry.capital}</h3>
        <h3 className={style.h3}>Sub-Region:{theCountry.subregion}</h3>
        <h3 className={style.h3}>Area:{theCountry.area / 1000} km2</h3>
        <h3 className={style.h3}>
          Population:{theCountry.population / 1000000} Millions
        </h3>
      </div>
      <div className={style.activities}>
        <h3 className={style.h3}>Activities:</h3>

        {theCountry.activities === undefined ||
        theCountry.activities.length <= 0 ||
        theCountry.activities === null ? (
          <p className={style.h4}>"No Activities Found"</p>
        ) : (
          theCountry.activities.map((e) => (
            <div className={style.h4}>
              <h4>
                Name: {e.name}, Difficulty: {e.difficulty}, Duration:{" "}
                {e.duration}, Season: {e.seasson}
              </h4>
            </div>
          ))
        )}
      </div>
    </div>
  ) : (
    "Loading..."
  );
}
