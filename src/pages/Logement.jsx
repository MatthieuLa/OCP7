import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Slideshow from "../components/Slideshow";
import logements from "/logements.json";
import Collapse from "../components/Collapse";

export default function Logement() {
  let { id } = useParams();
  const navigate = useNavigate();
  const logement = logements.find((item) => item.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/NotFound");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  const about = [
    {
      title: "Description",
      content: logement.description,
    },
    { title: "Équipements", content: logement.equipments.join(", ") },
  ];

  return (
    <>
      <Slideshow pictures={logement.pictures} />
      <div className="content-wrapper">
        <h1 className="log-title">{logement.title}</h1>
        <p className="log-location">{logement.location}</p>
        <p className="log-host-name">{logement.host.name}</p>
        <img
          src={logement.host.picture}
          alt={logement.host.name}
          className="log-host"
        />
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
          })}
        </div>
        <div className="log-tags__wrapper">
          {logement.tags.map((tag, index) => (
            <span key={index} className="log-tag">
              {tag}
            </span>
          ))}
        </div>
        <Collapse items={about} />
      </div>
    </>
  );
}
