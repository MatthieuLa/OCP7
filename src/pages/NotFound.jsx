import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="not-found__container">
        <div className="not-found__color">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas</h2>
        </div>
        <Link to="/" className="not-found__link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </>
  );
}

export default NotFound;
