import { Link, useLocation } from "react-router-dom";
import { Container, Li, Menu } from "./styles";
import logo from "../../assets/logo1.png";


function Header() {
  const { pathname } = useLocation();
  return (
    <Container>
      <img src={logo} alt="" />
      <Menu>
        <Li isActive={pathname === "/filmes-react/"}>
          <Link to="/filmes-react/">Home</Link>
        </Li>
        <Li isActive={pathname.includes("/filmes-react/filmes")}>
          <Link to="/filmes-react/filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes("/filmes-react/series")}>
          <Link to="/filmes-react/series">Series</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
