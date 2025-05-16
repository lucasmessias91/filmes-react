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
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [popularPersons, setPopularPersons] = useState();
  useEffect(() => {
    async function getMovies() {
      const { data } = await api.get("/movie/popular");
      setMovie(data.results[0]);
    }

    async function getTopMovies() {
      const { data } = await api.get("/movie/top_rated");
      setTopMovie(data.results);
    }

    async function getTopSeries() {
      const { data } = await api.get("/tv/top_rated");
      setTopSeries(data.results);
    }

    async function getPopularSeries() {
      const { data } = await api.get("/tv/popular");
      setPopularSeries(data.results);
    }

    async function getPopularPersons() {
      const { data } = await api.get("/person/popular");
      setPopularPersons(data.results);
    }

    getPopularPersons();
    getPopularSeries();
    getTopSeries();
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
      {topSeries && <Slider info={topSeries} title={"Top Series"}/>}
      {popularSeries && <Slider info={popularSeries} title={"Séries Populares"}/>}
      {popularPersons && <Slider info={popularPersons} title={"Artistas Populares"}/>}
    </>
  );
}

export default Home;
