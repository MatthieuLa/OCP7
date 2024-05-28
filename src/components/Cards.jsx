export default function Cards({ logements }) {
  return (
    <div className="cards-bg">
      <div className="cards-wrapper">
        {logements.map((logement) => (
          <div key={logement.id} className="cards">
            <img
              src={logement.cover}
              alt={logement.title}
              className="cards-cover"
            />
            <p className="cards-title">{logement.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
