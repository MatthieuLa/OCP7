import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Slideshow from "../components/Slideshow";
import logements from "/logements.json";

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

  return (
    <>
      <Slideshow pictures={logement.pictures} />
    </>
  );
}
