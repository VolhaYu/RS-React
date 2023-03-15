import SearchBar from "../components/SearchBar/SearchBar";
import React from "react";
import Cards from "../components/cardsComponents/Cards";

function Home() {
  return (
    <>
      <h1 className="center">Home Pages</h1>
      <SearchBar />
      <Cards />
    </>
  );
}

export default Home;
