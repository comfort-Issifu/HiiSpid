import actionTypes from "./location.types";

const initialState = { locations: [], isLoading: false, error: "" };

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.LOADING:
      return { ...state, isLoading: true };

    case actionTypes.LOACTION_LOADED:
      return { ...state, isLoading: false, locations: action.payload };

    case actionTypes.REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

export { reducer, initialState };
