import { Link } from "react-router-dom";
import { Container, Li, Menu } from "./styles";
import logo from "../../assets/logo1.png";


function Header() {
  return (
    <Container>
      <img src={logo} alt="" />
      <Menu>
        <Li>
          <Link to="/filmes-react/">Home</Link>
        </Li>
        <Li>
          <Link to="/filmes-react/filmes">Filmes</Link>
        </Li>
        <Li>
          <Link to="/filmes-react/series">Series</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
