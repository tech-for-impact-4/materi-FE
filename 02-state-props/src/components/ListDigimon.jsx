import { useState } from "react";
import Card from "./Card";

function ListDigimon() {
  const [digimons, setDigimons] = useState([
    {name: "Biyomon", gambar: "https://digimon.shadowsmith.com/img/biyomon.jpg" },
    {name: "Gabumon", gambar: "https://digimon.shadowsmith.com/img/gabumon.jpg" },
    {name: "Gomamon", gambar: "https://digimon.shadowsmith.com/img/gomamon.jpg" },
  ])

  return (
    <section className="list-digimon">
      <Card
        img="https://digimon.shadowsmith.com/img/agumon.jpg"
        name="Agumon"
      />
      <Card
        img="https://digimon.shadowsmith.com/img/patamon.jpg"
        name="Patamon"
      />
      <Card
        img="https://digimon.shadowsmith.com/img/veemon.jpg"
        name="Veemon"
      />

      {digimons.map((item, index) => (
        <Card
          key={index}
          img={item.gambar}
          name={item.name}
        />
      ))}

    </section>
  );
}

export default ListDigimon;
