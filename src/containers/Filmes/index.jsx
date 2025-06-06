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
  getNowPlaying,
  getTopMovies,
  getUpComing,
} from "../../services/getData";

function Filmes() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovie] = useState();
  const [upComing, setUpComing] = useState();
  const [nowPlaying, setNowPlaying] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getTopMovies(),
        getUpComing(),
        getNowPlaying(),
      ])
        .then(([movie, topMovies, upComing, nowPlaying]) => {
          setMovie(movie);
          setTopMovie(topMovies);
          setUpComing(upComing);
          setNowPlaying(nowPlaying);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
    getAllData();
  }, []);
  return (
    <>
      {movie && (
        <div>
          <Background img={getImages(movie[2].backdrop_path)}>
            {showModal && (
              <Modal movieId={movie[2].id} setShowModal={setShowModal} />
            )}
            <Container>
              <Info>
                <h1>{movie[2].title}</h1>
                <p>{movie[2].overview}</p>
                <ContainerButtons>
                  <Button
                    red={true}
                    onClick={() =>
                      navigate(`/filmes-react/detalhe/${movie[2].id}`)
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
                <img
                  src={getImages(movie[2].poster_path)}
                  alt={movie[2].title}
                />
              </Poster>
            </Container>
          </Background>
        </div>
      )}
      {nowPlaying && <Slider info={nowPlaying} media_type="movie" title={"Em Alta"} />}
      {topMovies && <Slider info={topMovies} media_type="movie" title={"Top Filmes"} />}
      {upComing && <Slider info={upComing} media_type="movie" title={"Em Breve!"} />}
    </>
  );
}

export default Filmes;
