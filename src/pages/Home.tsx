import React from 'react';
import ApiCards from '../components/ApiCards/apiCards';
import SearchBar from '../components/SearchBar/SearchBar';
import Cards from '../components/cardsComponents/Cards';

function Home() {
  return (
    <main>
      <h1 className="center">Home Pages</h1>
      <ApiCards />
      {/* <SearchBar />
      <Cards /> */}
    </main>
  );
}

export default Home;
