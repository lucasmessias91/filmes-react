import { Route, Routes } from "react-router-dom";

import  Home  from "../containers/Home";
import Filmes from "../containers/Filmes";
import Series from "../containers/Series";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filmes" element={<Filmes />} />
      <Route path="/series" element={<Series />} />
    </Routes>
  );
}

export default Router;