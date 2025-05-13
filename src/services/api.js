import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiIxOWY0NTY5N2EyN2VjMmE0ODVhNzY2OWMyZDIxNDkwOSIsIm5iZiI6MTc0NjIzMTQwMC43MjQsInN1YiI6IjY4MTU2MDY4ODY3ZTUyMmFlZWJlOGYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fDM1fkMRdRuR9ZkVo6luZ28gtWma5e8GkdwX0S7vuvY",
    Accept: "application/json",
  },
  params: {
    api_key: "19f45697a27ec2a485a7669c2d214909",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
