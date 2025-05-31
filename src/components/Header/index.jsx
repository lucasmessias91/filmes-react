import { Link, useLocation } from "react-router-dom";
import { Container, Li, Menu, Logo, MenuToggle } from "./styles";
import logo from "../../assets/logo1.png";
import { useEffect, useState } from "react";

function Header() {
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setChangeBackground(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <Container changeBackground={changeBackground}>
      <img src={logo} alt="logo" />
      <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>☰</MenuToggle>
      <Menu isOpen={menuOpen}>
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
