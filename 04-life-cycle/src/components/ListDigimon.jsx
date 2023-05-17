import axios from "axios";
import { useEffect, useState } from "react";

function ListDigimon() {
  const [digimons, setDigiomons] = useState([]);
  console.log(1);

  useEffect(() => {
    // fetch("https://digimon-api.vercel.app/api/digimon")
    //   .then((response) => response.json())
    //   .then((result) => {
    //     setDigiomons(result);
    //   });

    axios("https://digimon-api.vercel.app/api/digimon")
    .then(({data}) => setDigiomons(data))
    .catch(err => console.log(err))

    console.log(3);
  }, []);

  console.log(digimons);

  return (
    <div>
      <h1>Digimons</h1>
      {console.log(2)}
      {digimons.length === 0 ? (
        <span>Loading...</span>
      ) : (
        digimons.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt="" width={200} />
            <h3>{item.name}</h3>
            <h4>{item.level}</h4>

          </div>
        ))
      )}
    </div>
  );
}

export default ListDigimon;
