import "./CountryCard.css";
import { Link } from "react-router-dom";

function CountryCard({ country }) {
  return (
    <div className="card">

      <div className="card-image">
        <img
          src={country.cardImage}
          alt={country.name.common}
        />

        <div className="country-code">
          {country.cca2}
        </div>

        <div className="image-overlay">
          <span>{country.region}</span>
          <h2>{country.name.common}</h2>
        </div>
      </div>

      <div className="card-content">
        <div className="stats">

          <div className="stat">
            <span>POP</span>
            <strong>
              {country.population >= 1000000
                ? `${(country.population / 1000000).toFixed(1)}M`
                : `${(country.population / 1000).toFixed(0)}K`}
            </strong>
          </div>

          <div className="stat">
            <span>CAPITAL</span>
            <strong>
              {country.capital}
            </strong>
          </div>

          <div className="stat">
            <span>REGION</span>
            <strong>{country.region}</strong>
          </div>

        </div>

        <Link
          to={`/country/${country.cca3}`}
          className="card-link"
        >
          <button className="details">
            View Details
            <i className="bi bi-arrow-right"></i>
          </button>
        </Link>

      </div>

    </div>
  );
}

export default CountryCard;