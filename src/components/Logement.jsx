import { useEffect, useState } from "react";

export default function Logement() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => setLogements(data));
  }, []);

  return (
    <div>
      <h1>Logements</h1>
    </div>
  );
}
