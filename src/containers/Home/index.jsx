import api from "../../services/api";
import { Background } from "./styles";
import { useState, useEffect } from "react";

function Home() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      const { data } = await api.get("/movie/popular");
      setMovie(data.results[1]);
      console.log(data.results[1]);
    }
    getMovies();
  }, []);

  return (
    <>
      {movie && (
        <div>
          <Background img={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </Background>
        </div>
      )}
    </>
  );
}

export default Home;
