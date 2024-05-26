import Cards from "../components/Cards";
import Logement from "../components/Logement";
function Home() {
  return (
    <div className="placeholder">
      <div className="img-overlay">
        <img src="./src/assets/images/01.png" alt="" className="img-home" />
        <span className="img-text">Chez vous, partout et ailleurs </span>
      </div>
      <Cards />
    </div>
  );
}

export default Home;
