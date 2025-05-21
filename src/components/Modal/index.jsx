import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, Background } from "./styles";

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function getMovies() {
      const { data } = await api.get(`/movie/${movieId}/videos`);
      setMovie(data.results[0]);
    }

    getMovies();
  }, []);

  return (
    <Background onClick={() => setShowModal(false)}>
      {movie && (
        <Container>
          <iframe
            src={`https://youtube.com/embed/${movie.key}`}
            title="YouTube video player"
            height="500px"
            width="100%"
          ></iframe>
          <button onClick={() => setShowModal(false)}>X</button>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
