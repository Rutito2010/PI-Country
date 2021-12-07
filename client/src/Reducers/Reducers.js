const initialState = {
  totalCountries: [],
  filteredCountries: [],
  details: [],
  activity: [],
  post: {},
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        totalCountries: payload,
        filteredCountries: payload,
      };
    case "GET_BY_ID":
      return {
        ...state,
        details: payload,
      };
    case "ORDER_BY_POPULATION":
      if (payload === "desc") {
        return {
          ...state,
          filteredCountries: [...state.filteredCountries].sort((prev, next) =>
            prev.population > next.population ? 1 : -1
          ),
        };
      } else if (payload === "asc") {
        return {
          ...state,
          filteredCountries: [...state.filteredCountries].sort((prev, next) =>
            prev.population > next.population ? -1 : 1
          ),
        };
      }
      break;
    case "ORDER_BY_NAME":
      if (payload === "za") {
        return {
          ...state,
          filteredCountries: [...state.filteredCountries].sort((prev, next) =>
            prev.name > next.name ? -1 : 1
          ),
        };
      } else if (payload === "az") {
        return {
          ...state,
          filteredCountries: [...state.filteredCountries].sort((prev, next) =>
            prev.name > next.name ? 1 : -1
          ),
        };
      } else if (payload === "All") {
        return {
          ...state,
          filteredCountries: state.totalCountries,
        };
      }
      break;
    case "FILTER_BY_CONTINENT":
      if (payload !== "All") {
        return {
          ...state,
          filteredCountries: state.totalCountries.filter(
            (e) => e.continent === payload
          ),
        };
      } else {
        return { ...state, filteredCountries: state.totalCountries };
      }

    case "FILTER_BY_ACTIVITY":
      var actFilter = state.totalCountries;
      let newCountries = actFilter.map((e) => {
        return {
          ...e,
          activities: e.activities.map((a) => a.name),
        };
      });

      var filter =
        payload === "All"
          ? actFilter
          : newCountries.filter((e) => e.activities.includes(payload));
      return {
        ...state,
        filteredCountries: filter,
      };

    case "SEARCH_BY_NAME":
      const coun = [];
      coun.push(payload);
      return {
        ...state,
        filteredCountries: coun,
      };
    case "POST_ACTIVITY":
      return {
        ...state,
        post: payload,
      };
    case "GET_ACTIVITIES":
      return {
        ...state,
        activity: payload,
      };

    default:
      return state;
  }
}
