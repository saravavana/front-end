import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import countries from "../data/countries.json";
import "./CountryDetails.css";

function CountryDetails() {
  const { code } = useParams();
  const [activeTab, setActiveTab] = useState("data");

  const country = countries.find(
    (item) => item.cca3 === code
  );

  if (!country) {
    return <h1>Country Not Found</h1>;
  }

  return (
 <div
  className="details-container"
  style={{ "--theme-color": country.themeColor || "#dde5f7" }}
>
    <div className="hero">
      <h1>{country.name.common}</h1>

      <p>
        {country.name.common} is a country located in {country.region}.
        It is known for its unique culture, history, geography and natural beauty.
        Explore important information about this country.
      </p>
    </div>
    <Link to="/" className="back-btn">
      ⬅ Back
    </Link>

    <img
      className="flag"
      src={country.flag}
      alt={country.name.common}
    />


    <div className="tabs">

      <button
        className={activeTab === "data" ? "active" : ""}
        onClick={() => setActiveTab("data")}
      >
        Data
      </button>

      <button
        className={activeTab === "map" ? "active" : ""}
        onClick={() => setActiveTab("map")}
      >
        Map
      </button>

    </div>

    {activeTab === "data" && (
      <div className="info">

        <p>
          <strong>Capital</strong>
          {country.capital?.[0] || "N/A"}
        </p>

        <p>
          <strong>Region</strong>
          {country.region || "N/A"}
        </p>

        <p>
          <strong>Population</strong>
          {country.population?.toLocaleString() || "N/A"}
        </p>

        <p>
          <strong>Area</strong>
          {country.area?.toLocaleString() || "N/A"} km²
        </p>

        <p>
          <strong>Languages</strong>
          {country.languages
            ? Object.values(country.languages).join(", ")
            : "N/A"}
        </p>

        <p>
          <strong>Currency</strong>
          {country.currencies
            ? Object.values(country.currencies)
                .map((c) => c.name)
                .join(", ")
            : "N/A"}
        </p>

        <p>
          <strong>Timezones</strong>
          {country.timezones
            ? country.timezones.join(", ")
            : "N/A"}
        </p>

        <p>
          <strong>Coordinates</strong>
          {country.latlng
            ? `${country.latlng[0]}° ${country.latlng[1]}°`
            : "N/A"}
        </p>

      </div>
    )}

    {activeTab === "map" && (
      <div className="map">
        {country.maps && (
          <iframe
  src={`https://www.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}&z=4&output=embed`}
  title={`${country.name.common} Map`}
/>
        )}
      </div>
    )}

  </div>
);
}

export default CountryDetails;