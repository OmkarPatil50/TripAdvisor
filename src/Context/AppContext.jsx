import { useReducer } from "react";
import { AppContext } from "..";
import { data } from "../Data/Data";

export function AppContextProvider({ children }) {
  const reducerFun = (state, action) => {
    switch (action.type) {
      case "UPDATE_COUNTRIES": {
        return { ...state, countriesList: action.payload?.countries };
      }
      case "UPDATE_PLACES": {
        return { ...state, placesList: action.payload?.destinations };
      }
      case "UPDATE_PLACEDETAILS": {
        return { ...state, placeDetails: action.payload };
      }
      default:
        return state;
    }
  };

  const initialValue = {
    continentsList: data.continents,
    countriesList: [],
    placesList: [],
    placeDetails: {}
  };

  const [state, dispatch] = useReducer(reducerFun, initialValue);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
