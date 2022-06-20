import React, {useEffect} from 'react';
import AllCountriesUseQuery from "../../../services/api/getAllCountries";

const CountriesList = () => {

  const {data: allCountries, isLoading} = AllCountriesUseQuery()
  console.log("allCountries", allCountries)

  return (
    <div className="w-1/2 bg-slate-200 rounded">
      <p className={"text-center mt-2"}>Countries List</p>
      <ul>
        {isLoading ? "loading" : allCountries?.data?.map(country => (
          <li key={country?.population}>{country?.name?.common}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;
