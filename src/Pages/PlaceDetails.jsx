import { useContext, useEffect } from "react";
import { AppContext } from "..";
import { Link, useParams } from "react-router-dom";

export function PlaceDetails() {
  const { state, dispatch } = useContext(AppContext);
  const { placeID } = useParams();

  const getPlaceDetails = () => {
    const place = state.placesList.find(({ id }) => id == placeID);
    dispatch({ type: "UPDATE_PLACEDETAILS", payload: place });
  };

  useEffect(() => {
    getPlaceDetails();
  }, [placeID]);

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
  } = state.placeDetails;

  return (
    <div className="details-page">
      <Link to="/" className="home-link">
        Go to Home
      </Link>

      <h1>{name}</h1>
      <div className="main-section">
        <img src={image} alt="place" className="place-img" />
        <div className="place-info">
          <p>
            <span>Description: </span>
            {description}
          </p>
          <p>
            <span>Ratings: </span>
            {ratings}
          </p>
          <p>
            <span>Reviews: </span>
            {reviews}
          </p>
          <p>
            <span>Location: </span>
            {location}
          </p>
          <p>
            <span>Opening Hours: </span>
            {openingHours}
          </p>
          <p>
            <span>Ticket Price: </span>
            {ticketPrice}
          </p>
          <p className="website">{website}</p>
        </div>
      </div>
    </div>
  );
}
