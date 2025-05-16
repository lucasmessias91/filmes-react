import { Container } from "./styles";
import { getImages } from "../../utils/getImages";

function Card({ item }) {
  return (
    <Container>
      <img src={getImages(item.poster_path)} alt={item.original_title} />
      <h2>{item.original_title}</h2>
    </Container>
  );
}

export default Card;
