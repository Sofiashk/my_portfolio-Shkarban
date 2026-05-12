import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <h1>My Portfolio</h1>

      <nav>
        <Link to="/about">Про мене</Link>
        <Link to="/my-city">Моє місто</Link>
        <Link to="/my-future">Майбутнє</Link>
      </nav>

    </header>
  );
}

export default Header;