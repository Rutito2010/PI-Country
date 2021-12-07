import axios from "axios";

export function allCountries() {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/countries/all`)
      .then((res) => {
        dispatch({ type: "GET_COUNTRIES", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        alert("Ups! Something went wrong...");
      });
  };
  // return async function (dispatch) {
  //   var totalCountries = await axios.get("localhost:3001/countries/all");
  //   console.log(totalCountries.data);
  //   return dispatch({
  //     type: "GET_COUNTRIES",
  //     payload: totalCountries.data,
  //   });
}

export function idCountry(id) {
  return function (dispatch) {
    return axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((res) => {
        dispatch({
          type: "GET_BY_ID",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("la cagaste wey");
      });
  };
}
export function orderByPopulation(payload) {
  return function (dispatch) {
    dispatch({
      type: "ORDER_BY_POPULATION",
      payload: payload,
    });
  };
}
export function orderByName(payload) {
  return function (dispatch) {
    dispatch({
      type: "ORDER_BY_NAME",
      payload: payload,
    });
  };
}

//Filtrado
export function filterByContinent(payload) {
  return function (dispatch) {
    dispatch({
      type: "FILTER_BY_CONTINENT",
      payload: payload,
    });
  };
}
export function filterByActivity(payload) {
  return function (dispatch) {
    dispatch({
      type: "FILTER_BY_ACTIVITY",
      payload: payload,
    });
  };
}
//buscamos por nombre
export function searchByName(name) {
  return async function (dispatch) {
    var countryByName = await axios.get(
      `http://localhost:3001/countries?name=${name}`
    );
    // .then((res) => {
    //   dispatch({
    //     type: "SEARCH_BY_NAME",
    //     payload: res.data,
    //   });
    // })
    // .catch((err) => {
    //   console.log(err);
    //   alert("la cagaste wey 2");
    // });
    // };
    dispatch({
      type: "SEARCH_BY_NAME",
      payload: countryByName.data,
    });
  };
}
//creacion de actividad
export function createNewActivity(input) {
  return async function (dispatch) {
    var nActivity = await axios.post("http://localhost:3001/activity", input);
    dispatch({
      type: "POST_ACTIVITY",
      payload: nActivity.data,
    });
  };
}
//traemos las actividades creadas
export function allActivities() {
  return function (dispatch) {
    axios.get(`http://localhost:3001/activity`).then((res) => {
      dispatch({
        type: "GET_ACTIVITIES",
        payload: res.data,
      });
    });
  };
}
