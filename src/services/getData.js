import api from "./api";

export async function getMovies() {
  const { data } = await api.get("/movie/popular");
  return data.results;
}

export async function getUpComing() {
  const { data } = await api.get("/movie/upcoming");
  return data.results;
}

export async function getNowPlaying() {
  const { data } = await api.get("/movie/now_playing");
  return data.results;
}

export async function getTopMovies() {
  const { data } = await api.get("/movie/top_rated");
  return data.results;
}

export async function getTopSeries() {
  const { data } = await api.get("/tv/top_rated");
  return data.results;
}

export async function getPopularSeries() {
  const { data } = await api.get("/tv/popular");
  return data.results;
}

export async function getPopularPersons() {
  const { data } = await api.get("/person/popular");
  return data.results;
}

export async function getMovieVideos(movieId) {
  const { data } = await api.get(`/movie/${movieId}/videos`);
  return data.results;
}

export async function getMovieVideo(movieId) {
  const { data } = await api.get(`/movie/${movieId}/videos`);
  return data.results[0];
}

export async function getMovieCredits(movieId) {
  const { data } = await api.get(`/movie/${movieId}/credits`);
  return data;
}

export async function getMovieSimilar(movieId) {
  const { data } = await api.get(`/movie/${movieId}/similar`);
  return data.results;
}

export async function getMovieById(movieId) {
  const { data } = await api.get(`/movie/${movieId}`);
  return data;
}
