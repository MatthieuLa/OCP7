import { NavLink } from "react-router-dom";

function Header() {
  /* 
    props = {
        navItem: "Mention légales"
        abc: "ABC"
        [key]: value,
        children
    }
    */
  return (
    <>
      <header className="header-container">
        <h1 className="header-logo">
          K
          <span>
            <img src="./src/assets/logo_house.svg" alt="" />
          </span>
          sa
        </h1>
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
