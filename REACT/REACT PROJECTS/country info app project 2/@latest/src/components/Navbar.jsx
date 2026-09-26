import "./Navbar.css";

function Navbar({ setSearch, setRegion, setSort }) {
  return (
    <nav className="navbar">

      <div className="nav-logo">
        <div className="logo-icon">
          <i className="bi bi-globe2"></i>
        </div>

        <div className="logo-text">
          <h1>COUNTRY INFO</h1>
          <span>EXPLORE THE WORLD</span>
        </div>
      </div>

      

      <div className="controls">

        <div className="search-box">
          <i className="bi bi-search"></i>

          <input
            type="text"
            placeholder="Search country..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select onChange={(e) => setRegion(e.target.value)}>
          <option value="All">All Regions</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select onChange={(e) => setSort(e.target.value)}>
          <option value="default">Default</option>
          <option value="az">Name A-Z</option>
          <option value="za">Name Z-A</option>
          <option value="popAsc">Population Low</option>
          <option value="popDesc">Population High</option>
        </select>

      </div>

    </nav>
  );
}

export default Navbar;