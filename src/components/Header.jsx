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
            <li>Acceuil</li>
            <li>A propos</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
