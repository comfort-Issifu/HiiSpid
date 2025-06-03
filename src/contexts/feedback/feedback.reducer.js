import actionTypes from "./feedback.types";

const initialState = {
  feedbacks: [],
  isLoading: false,
  isButtonloading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.LOADING:
      return { ...state, isLoading: true, isButtonloading: false };

    case actionTypes.BUTTON_LOADING:
      return { ...state, isButtonloading: true };

    case actionTypes.FEEDBACK_LOADED:
      return {
        ...state,
        isLoading: false,
        isButtonloading: false,
        feedbacks: action.payload,
      };

    case actionTypes.FEEDBACK_CREATED:
      return {
        ...state,
        isLoading: false,
        isButtonloading: false,
        feedbacks: [...state.feedbacks],
      };

    case actionTypes.REJECTED:
      return {
        ...state,
        isLoading: false,
        isButtonloading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

export { reducer, initialState };
