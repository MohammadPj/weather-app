import React from 'react';
import CountriesList from "./features/CountriesList";
import CountryDetail from "./features/CountryDetail";

const Home = () => {
  return (
    <div className={"max-w-[1440px] w-full flex justify-between items-center gap-5"}>
      <CountriesList />
      <CountryDetail />
    </div>
  );
};

export default Home;
