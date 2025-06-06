import { useEffect, useState } from "react";
import { Container, Background, Cover, Info, ContainerMovies } from "./styles";
import Slider from "../../components/Slider";
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
  getSeriesById,
  getSeriesVideos,
  getSeriesCredits,
  getMovieVideo,
} from "../../services/getData";
import { useParams } from "react-router-dom";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";

function Detail({}) {
  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  const { id, type } = useParams();

  useEffect(() => {
    async function getAllData() {
      try {
        const getDetails = type === "tv" ? getSeriesById : getMovieById;
        const getVideos = type === "tv" ? getSeriesVideos : getMovieVideos;
        const getCredits = type === "tv" ? getSeriesCredits : getMovieCredits;
        const getSimilar = type === "tv" ? getMovieSimilar : getMovieSimilar;

        const [details, videos, credits, similar] = await Promise.all([
          getDetails(id),
          getVideos(id),
          getCredits(id),
          getSimilar(id),
        ]);

        setMovie(details);
        setMovieVideos(videos);
        setMovieCredits(credits);
        setSimilarMovies(similar);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getAllData();
  }, [id, type]);
  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} alt="" />
            </Cover>
            <Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <Credits credits={movieCredits} />
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://youtube.com/embed/${video.key}`}
                    title="YouTube video player"
                    height="500px"
                    width="100%"
                  ></iframe>
                </div>
              ))}
          </ContainerMovies>
          {similarMovies && (
            <Slider info={similarMovies} title={"Similares"} />
          )}
        </>
      )}
    </>
  );
}

export default Detail;
