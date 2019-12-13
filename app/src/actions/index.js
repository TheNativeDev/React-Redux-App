import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const fetchUrbanAreas = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axios
    .get("https://api.teleport.org/api/urban_areas/")
    .then(res =>
      dispatch({ type: FETCH_SUCCESS, payload: res.data._links["ua:item"] })
    )
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const START_SEARCHING = "START_SEARCHING";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";

export const searchUrbanCity = url => dispatch => {
  dispatch({ type: START_FETCHING });
  axios
    .get(`${url}scores`)
    .then(res => dispatch({ type: SEARCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: SEARCH_FAILURE, payload: err.response }));
};