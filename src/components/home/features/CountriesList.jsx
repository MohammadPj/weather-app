import React, {useEffect, useState} from 'react';
import AllCountriesUseQuery from "../../../services/api/getAllCountries";

const CountriesList = ({onSelectCountry}) => {

  const {data: allCountries, isLoading} = AllCountriesUseQuery()


  const handleChangeCountries = (e) => {
    const index = +e.target.value
    const selectedCountry = allCountries.data.find((country, i) => i === index)
    onSelectCountry(selectedCountry)
  }

  return (
    <div className="w-1/2 bg-slate-200 rounded h-full p-4">
      <p className={"text-center font-bold"}>Countries List</p>
      <div className=" mt-2">
        <select onChange={handleChangeCountries} id="countries" className={"w-full"} >
          {isLoading ? "loading" : allCountries?.data?.map((country, i) => (
            <option key={i} value={i} > {country?.name?.common} </option>
          ))}
        </select>
      </div>

    </div>
  );
};

export default CountriesList;
