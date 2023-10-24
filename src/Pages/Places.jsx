import { useContext, useEffect, useState } from "react";
import { AppContext } from "..";
import { Link, useParams } from "react-router-dom";

export function Places() {
  const { state, dispatch } = useContext(AppContext);
  const { countryID } = useParams();
  const [countryName, setCountryName] = useState("");

  const getPlacesList = () => {
    const list = state.countriesList.find(({ id }) => id == countryID);
    dispatch({ type: "UPDATE_PLACES", payload: list });
    setCountryName(list?.name);
  };

  useEffect(() => {
    getPlacesList();
  }, [countryID]);

  return (
    <div className="landing-page">
      <Link to="/" className="home-link">
        Go to Home
      </Link>
      <h3 className="sub-heading">{`Top Destinations in ${countryName} for your next holiday`}</h3>
      <div className="continents-section">
        {state.placesList.map((place) => {
          const {
            id,
            name,
            description,
            image,
            ratings,
            reviews,
            location,
            openingHours,
            ticketPrice,
            website
          } = place;
          return (
            <Link to={`/place/${id}`} key={id}>
              <div className="card">
                <img src={image} alt="" className="card-img" />
                <div className="continent-name">
                  <i className="fa-solid fa-location-dot"></i> {name}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
