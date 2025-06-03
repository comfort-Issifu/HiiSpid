import { createContext, useContext, useEffect, useReducer } from "react";
import { addFeedbacks, getFeedbacks } from "../services/feedback";
import toast from "react-hot-toast";

const initialState = {
  feedbacks: [],
  isLoading: false,
  isButtonloading: false,
  error: "",
};
const FeedbackContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, isButtonloading: false };

    case "button/loading":
      return { ...state, isButtonloading: true };

    case "feedbacks/loaded":
      return {
        ...state,
        isLoading: false,
        isButtonloading: false,
        feedbacks: action.payload,
      };

    case "feedbacks/created":
      return {
        ...state,
        isLoading: false,
        isButtonloading: false,
        feedbacks: [...state.feedbacks],
      };

    case "rejected":
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

function FeedbackProvider({ children }) {
  const [{ feedbacks, isLoading, isButtonloading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getAllFeedbacks() {
      try {
        dispatch({ type: "loading" });
        const data = await getFeedbacks();
        dispatch({ type: "feedbacks/loaded", payload: data });
      } catch (error) {
        toast.error(error.message);
        dispatch({ type: "rejected", payload: error.message });
      }
    }
    getAllFeedbacks();
  }, []);

  const createFeedback = async (data) => {
    try {
      dispatch({ type: "loading" });
      dispatch({ type: "button/loading" });
      const newFeedback = await addFeedbacks(data);
      if (newFeedback) {
        toast.success("Thank you for your feedback!");
      }
      dispatch({ type: "feedbacks/created", payload: newFeedback });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: "rejected", payload: error.message });
    }

    return data;
  };

  return (
    <FeedbackContext.Provider
      value={{ createFeedback, feedbacks, isLoading, isButtonloading }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

function useFeedback() {
  const context = useContext(FeedbackContext);
  if (context === undefined) {
    throw new Error("useFeedback must be used within a FeedbackProvider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { FeedbackProvider, useFeedback };
