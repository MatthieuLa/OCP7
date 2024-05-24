import { Link } from "react-router-dom";

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
      <div className="header-container">
        <h1 className="header-logo">
          K
          <span>
            <img src="./src/assets/logo_house.svg" alt="" />
          </span>
          sa
        </h1>
        <nav>
          <ul>
            <Link to="/">
              <li>Acceuil</li>
            </Link>
            <Link to="/about">
              <li>A propos</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
