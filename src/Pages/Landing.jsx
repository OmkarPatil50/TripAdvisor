import { useContext } from "react";
import { AppContext } from "..";
import { Link } from "react-router-dom";

export function Landing() {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="landing-page">
      <h1>Welcome to Trip Advisor</h1>
      <h3 className="sub-heading">Top Continents for your next holiday</h3>
      <div className="continents-section">
        {state.continentsList.map((continent) => {
          const { id, name, image, countries } = continent;
          return (
            <Link to={`/continent/${id}`} key={id}>
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
