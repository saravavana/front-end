
import CountryCard from "./CountryCard";
import countriesData from "../data/countries.json";

function CountryList({ search,region,sort })  {

  const countries = countriesData;
  
  const filteredCountries = countries.filter((country) => {
  const matchSearch =
    country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchRegion =
    region === "All" ||
    country.region === region;
    

  return matchSearch && matchRegion;
});

  const sortedCountries = [...filteredCountries].sort((a, b) => {
    switch (sort) {
      case "az":
        return a.name.common.localeCompare(b.name.common);
      case "za":
        return b.name.common.localeCompare(a.name.common);
      case "popAsc":
        return a.population - b.population;
      case "popDesc":
        return b.population - a.population;
      default:
        return 0;
    }
  });


  return (
  <div className="country-container">
    {sortedCountries.map((country) => (
      <CountryCard
      key={country.cca3}
        country={country}
      />
    ))}
  </div>
);
}

export default CountryList;