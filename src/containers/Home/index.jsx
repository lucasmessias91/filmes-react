import api from "../../services/api";
import Button from "../../components/Button";
import { Background, Container, ContainerButtons, Info, Poster } from "./styles";
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
          <Background
            img={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          >
            <Container>
              <Info>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <ContainerButtons>
                  <Button red={true}>Assista Agora</Button>
                  <Button red={false}>Assista o Trailer</Button>
                </ContainerButtons>
              </Info>
              <Poster>
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Poster>
            </Container>
          </Background>
        </div>
      )}
    </>
  );
}

export default Home;
