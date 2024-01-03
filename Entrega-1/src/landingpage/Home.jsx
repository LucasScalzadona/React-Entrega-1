function Home() {
  return (
    <header>
      <nav>
        <img
          className="navLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Omega_Logo.svg/1280px-Omega_Logo.svg.png"
          alt=""
        />
        <ul>
          <li>
            <a className="navHome" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Colecciones</a>
          </li>
          <li>
            <a href="#">Accesorios</a>
          </li>
          <li>
            <a href="#">Sale</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Home;
