import { Container } from "./styles";
import { getImages } from "../../utils/getImages";

function Card({ item }) {
  return (
    <Container>
      <img
        src={getImages(item.poster_path || item.profile_path || "")}
        alt={item.title || item.name}
      />
      <h2>{item.title || item.name}</h2>
    </Container>
  );
}

export default Card;
