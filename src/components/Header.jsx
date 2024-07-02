import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header-container">
        <img
          src="/src/assets/Header_Logo.svg"
          alt="Logo de la marque Kasa"
          className="logo-kasa"
        />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Acceuil</NavLink>
            </li>
            <li>
              <NavLink to="/about">A propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
