import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCountries, createNewActivity } from "../../Actions/Actions";

import style from "./NewActivity.module.css";

// export function validate(input) {
//   let errors = {};
//   if (!input.name) {
//     errors.name = "Name is required";
//   }
//   if (!input.difficulty) {
//     errors.difficulty = "Difficulty is required";
//   }
//   if (!input.duration) {
//     errors.duration = "Duration is required";
//   }
//   if (!input.season) {
//     errors.season = "Season is required";
//   }
//   if (!input.countries) {
//     errors.countries = "Add at least one country";
//   }
//   return errors;
// }

export default function NewActivity() {
  const dispatch = useDispatch();
  const { totalCountries } = useSelector((state) => state);

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    seasson: "",
    place: [],
  });

  useEffect(() => {
    dispatch(allCountries());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (!input.name) {
      alert("error create");
    } else {
      dispatch(createNewActivity(input));
      alert("Actividad Creada uwu");
    }
  };
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const [place, setPlace] = useState(false);
  const handleSelectedCountries = (e) => {
    setPlace(!place);
    if (input.place.includes(e.target.value)) {
      let pos = input.place.indexOf(e.target.value);
      input.place.splice(pos, 1);
    } else {
      input.place.push(e.target.value);
      // setInput({
      //   ...input,
      //   [e.target.name]: [...input.place, e.target.value],
      // });
    }
  };
  // const showAcitivities = (arr) => {
  //   var names = [];
  //   totalCountries?.forEach((country) => {
  //     arr.forEach((id) => {
  //       if (id === country.id) {
  //         names.push(country.name.toUpperCase());
  //       }
  //     });
  //   });
  //   return names;
  // };
  // const handleRemoveCountries = (e) => {
  //   if (input.place.includes(e.target.value)) {
  //     var i = places.indexOf(e);
  //     places.splice(i, 1);
  //   }
  // };
  return (
    <div className={style.containerNew}>
      <a href={"/Home"}>
        <button className={style.buttonHome}>Home</button>
      </a>
      <h1 className={style.h1}>Create a New Activity!</h1>

      <form onSubmit={(e) => handleSubmit(e)} className={style.formNew}>
        <ul className={style.listNew}>
          <div>
            <h4>Name :</h4>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <h4>Difficulty:</h4>
            <select
              className={style.divs}
              name="difficulty"
              value={input.difficulty}
              onChange={(e) => handleChange(e)}
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div>
            <h4>Duration:</h4>
            <input
              type="text"
              value={input.duration}
              name="duration"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <h4>Season:</h4>
            <select
              className={style.divs}
              name="seasson"
              value={input.seasson}
              onClick={(e) => handleChange(e)}
            >
              <option>Season</option>
              <option>Spring</option>
              <option>Summer</option>
              <option>Autumn</option>
              <option>Winter</option>
            </select>
            <div>{input.seasson}</div>
          </div>

          <div>
            <h4>Countries :</h4>
            <select
              className={style.divs}
              name="place"
              value={input.place}
              onClick={(e) => handleSelectedCountries(e)}
            >
              <option>Countries</option>
              {totalCountries?.map((c) => {
                return <option value={c.id}>{c.name.toUpperCase()}</option>;
              })}
            </select>
            <div>
              {/* eslint-disable-next-line*/}
              {input.place?.map((e) => {
                for (let i = 0; i < totalCountries.length; i++) {
                  if (totalCountries[i].id === e) {
                    return (
                      <p id={e}>
                        {totalCountries[i].name.toUpperCase()}
                        {/* <button type="delete" onClick={(e) => handleRemoveCountries(e)}>
                x
                </button> */}
                      </p>
                    );
                  }
                }
              })}
            </div>
          </div>

          <button className={style.button} type="submit">
            Create Your Activity
          </button>
        </ul>
      </form>
    </div>
  );
}
