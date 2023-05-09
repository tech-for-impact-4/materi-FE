// destructure props
function Card({img, name}) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  );
}

export default Card;

// JS
// card("alamat gambar", "nama")


// JSX
// <Card img="alamat" name="nama" />