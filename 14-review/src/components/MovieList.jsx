import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataMovies } from "../redux/actions/moviesAction";
import { Card, Col, Row } from "react-bootstrap";

function MovieList() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.moviesReducer);

  useEffect(() => {
    dispatch(getDataMovies());
  }, []);

  console.log(movies);

  return (
    <div>
      <h1>Playing Now</h1>

      <Row xs={1} md={6} className="g-4">
        {movies.map((item, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} width={100}/>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.overview}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
}

export default MovieList;
