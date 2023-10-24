import { useContext, useEffect, useState } from "react";
import { AppContext } from "..";
import { Link, useParams } from "react-router-dom";

export function Countries() {
  const { state, dispatch } = useContext(AppContext);
  const { continentID } = useParams();
  const [continentName, setContinentName] = useState("");

  const getCountries = () => {
    const list = state.continentsList.find(({ id }) => id == continentID);
    dispatch({ type: "UPDATE_COUNTRIES", payload: list });
    setContinentName(list.name);
  };

  useEffect(() => {
    getCountries();
  }, [continentID]);

  return (
    <div className="landing-page">
      <Link to="/" className="home-link">
        Go to Home
      </Link>

      <h3 className="sub-heading">{`Top Countries in ${continentName} for your next holiday`}</h3>
      <div className="continents-section">
        {state.countriesList.map((country) => {
          const { id, name, image } = country;
          return (
            <Link to={`/country/${id}`} key={id}>
              <div className="card">
                <img src={image} alt="id" className="card-img" />
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
