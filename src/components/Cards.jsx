import { Link } from "react-router-dom";

export default function Cards({ logements }) {
  return (
    <div className="cards-bg">
      <div className="cards-wrapper">
        {logements.map((logement) => (
          <Link to={`/logements/${logement.id}`} key={logement.id}>
            <div className="cards">
              <img
                src={logement.cover}
                alt={logement.title}
                className="cards-cover"
              />
              <p className="cards-title">{logement.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
