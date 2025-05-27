import api from "./api";

export async function getMovies() {
  const { data } = await api.get("/movie/popular");
  return data.results[0];
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

export async function getMovie(movieId) {
  const { data } = await api.get(`/movie/${movieId}/videos`);
  return data.results[0];
}
