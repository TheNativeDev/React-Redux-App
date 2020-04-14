import {
    START_FETCHING,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    START_SEARCHING,
    SEARCH_FAILURE,
    SEARCH_SUCCESS
  } from "../actions";
  
  const initialState = {
    urbanAreas: [],
    urbanAreaScores: null,
    isFetching: false,
    isSearching: false,
    error: null
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case START_FETCHING:
        return { ...state, isFetching: true };
      case FETCH_SUCCESS:
        return { ...state, urbanAreas: action.payload, isFetching: false };
      case FETCH_FAILURE:
        return { ...state, error: action.payload, isFetching: false };
      case START_SEARCHING:
        return { ...state, isSearching: true };
      case SEARCH_SUCCESS:
        return { ...state, urbanAreaScores: action.payload, isSearching: false };
      case SEARCH_FAILURE:
        return { ...state, error: action.payload, isSearching: false };
      default:
        return state;
    }
  };
  
  export default reducer;