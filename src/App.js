import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { Countries } from "./Pages/Countries";
import { Places } from "./Pages/Places";
import { PlaceDetails } from "./Pages/PlaceDetails";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/continent/:continentID" element={<Countries />} />
        <Route path="/country/:countryID" element={<Places />} />
        <Route path="/place/:placeID" element={<PlaceDetails />} />
      </Routes>
    </div>
  );
}
