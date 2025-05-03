import Logo from "../../assets/logo1.png";

function Header() {
  return (
    <header>
      <img src={Logo} alt="logo-react-filmes" style={{width: 300}}/>
    </header>
  );
}

export default Header;