import React, {useState} from 'react';
import CountriesList from "./features/CountriesList";
import CountryDetail from "./features/country-detail/CountryDetail";

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState({});

  const handleSelectCountry = (selectedCountry) => {
    setSelectedCountry(selectedCountry)
  }

  return (
    <div className={"max-w-[850px] px-4 xl:px-0 w-full flex justify-between gap-5 mb-6" }>
      <CountriesList onSelectCountry={handleSelectCountry} />
      <CountryDetail selectedCountry={selectedCountry} />
    </div>
  );
};

export default Home;
