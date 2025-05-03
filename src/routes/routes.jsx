import { Route, Routes } from "react-router-dom";

import  Home  from "../containers/Home";
import Filmes from "../containers/Filmes";
import Series from "../containers/Series";
import DefaultLayout from "../layout/DefaultLayout";


function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}> 
      <Route path="/" element={<Home />} />
      <Route path="/filmes" element={<Filmes />} />
      <Route path="/series" element={<Series />} />
      </Route>
    </Routes>
  );
}

export default Router;