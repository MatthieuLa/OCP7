import { useEffect, useState } from "react";
import Cards from "./Cards";

export default function Logement() {
  return (
    <div>
      <Cards logements={logements} />
    </div>
  );
}
