import api from "../../services/api";
import { Background } from "./styles";
import { useState } from "react";

function Home() {
  const [movie, setMovie] = useState();

  async function getMovies() {
    const data = await api.get("/movie/popular");

    setMovie(data.data.results[1]);
  }

  return (
    <>
      {movie && (
        <div>
          <Background img="https://image.tmdb.org/t/p/w500/8j0v2q3x1c4g5k7z6e4f3g3g3g3.jpg">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </Background>
        </div>
      )}
    </>
  );
}

export default Home;
