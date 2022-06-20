import React from 'react';
import GetWeatherUseQuery from "../../../../services/api/getWeather";
import Detail from "./features/Detail";
import Weather from "./features/Weather";

const CountryDetail = ({selectedCountry}) => {

  console.log("selectedCountry", selectedCountry)
  const {data: weather} = GetWeatherUseQuery(selectedCountry)
  if (selectedCountry?.flag)
  return (
    <div className="w-1/2 bg-slate-200 rounded p-4">
      {/*country detail component*/}
      <Detail selectedCountry={selectedCountry} />

      {/* country weather component */}
      <Weather weather={weather} />
    </div>
  );
  else return null
};

export default React.memo(CountryDetail);
