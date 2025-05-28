import { getImages } from "../../utils/getImages";
import { Container, Title } from "./styles";

function Credits({ credits }) {
  return (
    <>
      <Title>Créditos</Title>
      {credits && (
      <Container>
        {credits.cast.slice(0, 5).map((credit) => (
          <div key={credit.id}>
            <img src={getImages(credit.profile_path)} alt="" />
            <p>{credit.original_name}</p>
          </div>
        ))}

      </Container>
      )}
    </>
  );
}

export default Credits;
