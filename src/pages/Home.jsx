import Cards from "../components/Cards";
import logements from "/logements.json";

function Home() {
  return (
    <div className="main-container">
      <div className="img-overlay">
        <img src="./src/assets/images/01.png" alt="" className="img-home" />
        <span className="img-text">Chez vous, partout et ailleurs </span>
      </div>
      <Cards logements={logements} />
    </div>
  );
}

export default Home;
