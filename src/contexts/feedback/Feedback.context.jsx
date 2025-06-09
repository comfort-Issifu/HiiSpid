import { createContext, useContext, useEffect, useReducer } from "react";
import { addFeedbacks, getFeedbacks } from "../../services/apiFeedback";
import toast from "react-hot-toast";
import actionTypes from "./feedback.types";
import { reducer, initialState } from "./feedback.reducer";

const FeedbackContext = createContext(initialState);

function FeedbackProvider({ children }) {
  const [{ feedbacks, isLoading, isButtonloading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getAllFeedbacks() {
      try {
        dispatch({ type: actionTypes.LOADING });
        const data = await getFeedbacks();
        dispatch({ type: actionTypes.FEEDBACK_LOADED, payload: data });
      } catch (error) {
        toast.error(error.message);
        dispatch({ type: actionTypes.REJECTED, payload: error.message });
      }
    }
    getAllFeedbacks();
  }, []);

  const createFeedback = async (data) => {
    try {
      dispatch({ type: actionTypes.LOADING });
      dispatch({ type: actionTypes.BUTTON_LOADING });
      const newFeedback = await addFeedbacks(data);
      if (newFeedback) {
        toast.success("Thank you for your feedback!");
      }
      dispatch({ type: actionTypes.FEEDBACK_CREATED, payload: newFeedback[0] });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: actionTypes.REJECTED, payload: error.message });
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
