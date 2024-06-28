import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Slideshow from "../components/Slideshow";
import logements from "/logements.json";
import Collapse from "../components/Collapse";

export default function Logement() {
  let { id } = useParams(); // Extracts the 'id' parameter from the URL
  const navigate = useNavigate(); // Provides navigation functionality
  const logement = logements.find((item) => item.id === id); // Finds the logement object with the matching 'id'

  useEffect(() => {
    if (!logement) {
      navigate("/NotFound"); // Redirects to the NotFound page if the logement is not found
    }
  }, [logement, navigate]);

  if (!logement) {
    return null; // Renders nothing if the logement is not found
  }

  return (
    <>
      <div className="main-container">
        {/* // Renders the Slideshow component with the logement's pictures */}
        <Slideshow pictures={logement.pictures} />
        <div className="content-wrapper">
          <div className="top-wrapper">
            <div className="top-description">
              {/* // Renders the logement's title */}
              <h1 className="log-title">{logement.title}</h1>
              {/* // Renders the logement's location */}
              <p className="log-location">{logement.location}</p>
              <div className="log-tags__wrapper">
                {logement.tags.map((tag, index) => (
                  // Renders the logement's tags
                  <span key={index} className="log-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="top-host__container">
              <div className="top-host__top">
                {/* // Renders the logement's tags */}
                <p className="log-host-name">{logement.host.name}</p>
                {/* // Renders the logement host's picture */}
                <img
                  src={logement.host.picture}
                  alt={logement.host.name}
                  className="log-host"
                />
              </div>
              <div className="log-rating__wrapper">
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <i
                      key={i}
                      className={`fa-solid fa-star ${
                        ratingValue <= logement.rating ? "clr-on" : "clr-off"
                      }`}
                    ></i>
                  );
                  // Renders the logement's rating stars
                })}
              </div>
            </div>
          </div>
          <div className="collapse-logement">
            <Collapse title={"Description"}>
              {/* // Renders the logement's descrip
              tion */}
              <div className="log-collapse">
                <p>{logement.description}</p>
              </div>
            </Collapse>
            <Collapse title={"Équipements"}>
              {/* // Renders the logement's equipments in a list */}
              <ul>
                {logement.equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
}
