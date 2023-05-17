import axios from "axios";
import { useEffect, useState } from "react";

export function useGetDigimon() {
  const [digimons, setDigiomons] = useState([]);
  console.log(1);

  useEffect(() => {
    axios("https://digimon-api.vercel.app/api/digimon")
    .then(({data}) => setDigiomons(data))
    .catch(err => console.log(err))

    console.log(3);
  }, []);

  return digimons
}