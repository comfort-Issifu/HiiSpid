import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./location.reduce";
import actionTypes from "./location.types";
import { getLocations } from "../../services/apiLocation";
import toast from "react-hot-toast";

const LocationContext = createContext(initialState);

function LocationProvider({ children }) {
  const [{ locations, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getAllLocations() {
      try {
        dispatch({ type: actionTypes.LOADING });
        const data = await getLocations();
      
        dispatch({ type: actionTypes.LOACTION_LOADED, payload: data });
      } catch (error) {
        toast.error(error.message);
        dispatch({ type: actionTypes.REJECTED, payload: error.message });
      }
    }

    getAllLocations();
  }, []);

  return (
    <LocationContext.Provider value={{ locations, isLoading }}>
      {children}
    </LocationContext.Provider>
  );
}

function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { LocationProvider, useLocation };
