import { useEffect, useState } from "react";
import { Container, Background } from "./styles";
import { getMovieVideo } from "../../services/getData";

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();
  useEffect(() => {
    async function getMovies() {
      setMovie(await getMovieVideo(movieId));
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
