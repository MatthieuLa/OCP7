import { useParams } from "react-router-dom";

export default function Logement() {
  const { id } = useParams();

  // @TODO : Vérifier au sein d'un useEffect si l'id correspond à un logement, sinon rediriger avec useNavigate vers la page NotFound.

  return (
    <>
      <img
        src="./src/assets/images/02.png"
        alt="Photo de l'intérieur d'un logement"
        className="img-logement"
      />
    </>
  );
}
