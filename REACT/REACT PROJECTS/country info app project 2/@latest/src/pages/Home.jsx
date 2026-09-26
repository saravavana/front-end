import { useState,useEffect } from "react";
import Navbar from "../components/Navbar";
import CountryList from "../components/CountryList";

function Home() {

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [sort, setSort] = useState("default");
useEffect(() => {
window.scrollTo(0, 0);
}, []);
  return (
    <>

      <Navbar
        setSearch={setSearch}
        setRegion={setRegion}
        setSort={setSort}
      />

      <CountryList
        search={search}
        region={region}
        sort={sort}
      />

    </>
  );
}

export default Home;