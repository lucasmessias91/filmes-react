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
import { useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import Modal from "../../components/Modal";
import { getImages } from "../../utils/getImages";
import {
  getMovies,
  getPopularPersons,
  getPopularSeries,
  getTopMovies,
  getTopSeries,
} from "../../services/getData";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovie] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [popularPersons, setPopularPersons] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopularSeries(),
        getPopularPersons()
      ])
        .then(
          ([movie, topMovies, topSeries, popularSeries, popularPersons]) => {
            setMovie(movie);
            setTopMovie(topMovies);
            setTopSeries(topSeries);
            setPopularSeries(popularSeries);
            setPopularPersons(popularPersons);
          }
        )
        .catch((error) => console.error("Error fetching data:", error));
    }
    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <div>
          <Background img={getImages(movie[0].backdrop_path)}>
            {showModal && (
              <Modal movieId={movie[0].id} setShowModal={setShowModal} />
            )}
            <Container>
              <Info>
                <h1>{movie[0].title}</h1>
                <p>{movie[0].overview}</p>
                <ContainerButtons>
                  <Button
                    red={true}
                    onClick={() =>
                      navigate(`/filmes-react/detalhe/${movie[0].id}`)
                    }
                  >
                    Assista Agora
                  </Button>
                  <Button onClick={() => setShowModal(true)} red={false}>
                    Assista o Trailer
                  </Button>
                </ContainerButtons>
              </Info>
              <Poster>
                <img src={getImages(movie[0].poster_path)} alt={movie[0].title} />
              </Poster>
            </Container>
          </Background>
        </div>
      )}
      {topMovies && <Slider info={topMovies} media_type="movie" title={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} media_type="tv" title={"Top Series"} />}
      {popularSeries && (
        <Slider info={popularSeries} media_type="tv" title={"Séries Populares"} />
      )}
      {popularPersons && (
        <Slider info={popularPersons} title={"Artistas Populares"} />
      )}
    </>
  );
}

export default Home;
