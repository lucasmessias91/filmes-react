import api from "../../services/api";
import Button from "../../components/Button";
import {
  Background,
  Container,
  ContainerButtons,
  Info,
  Poster,
} from "./styles";
import { useState, useEffect } from "react";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";

function Home() {
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovie] = useState();
  useEffect(() => {
    async function getMovies() {
      const { data } = await api.get("/movie/popular");
      setMovie(data.results[0]);
    }

    async function getTopMovies() {
      const { data } = await api.get("/movie/top_rated");
      setTopMovie(data.results);
    }
    getTopMovies();
    getMovies();
  }, []);

  return (
    <>
      {movie && (
        <div>
          <Background
            img={getImages(movie.backdrop_path)}
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
                  src={getImages(movie.poster_path)}
                  alt={movie.title}
                />
              </Poster>
            </Container>
          </Background>
        </div>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"}/>}
    </>
  );
}

export default Home;
