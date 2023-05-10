import { Col, Container, Row } from "react-bootstrap";
import Counter from "./Counter";
import { useState } from "react";

function CartList() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "pensil",
      price: 2000,
      img: "https://faber-castell.co.id/cfind/source/images/product/gwm/117102-a.jpg",
    },
    {
      id: 2,
      name: "buku",
      price: 10000,
      img: "https://cdn-2.tstatic.net/wartakota/foto/bank/images/ilustrasi-buku-merah.jpg",
    },
    {
      id: 3,
      name: "penggaris",
      price: 5000,
      img: "https://gratisongkir-storage.com/products/900x900/2XN86LXpIT2s.jpg",
    },
    {
      id: 4,
      name: "penghapus",
      price: 2000,
      img: "https://asset.kompas.com/crops/8H6Grk1-tOVskDfa-J7gqyJEIX4=/4x0:500x330/750x500/data/photo/2020/03/21/5e75869d3efd9.jpg",
    },
  ]);

  const deleteItem = (item) => {
    console.log("hapus");
    console.log(item);

    let rest = cartItems.filter((element) => element.id !== item.id);

    console.log(rest);
    setCartItems(rest);
  };

  return (
    <Container>
      {cartItems.length === 0 ? (
        <span>keranjang kosong</span>
      ) : (
        cartItems.map((item) => (
          <Row className="align-items-center" key={item.id}>
            <Col>
              <img src={item.img} alt="" width={100} />
            </Col>
            <Col>{item.name}</Col>
            <Col>Rp{item.price}</Col>
            <Col>
              <Counter />
            </Col>
            <Col onClick={() => deleteItem(item)}>Hapus</Col>
          </Row>
        ))
      )}
    </Container>
  );
}

export default CartList;
