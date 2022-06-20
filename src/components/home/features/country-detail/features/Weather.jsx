import React from 'react';

const Weather = ({weather}) => {
  const iconSrc = weather?.data?.weather[0]?.icon

  return (
    <>
      <p className={"text-center font-bold mt-4"}>Country Weather</p>
      <p className={"mt-2 "}><span className={"font-bold"}>Temperature :</span> {weather?.data?.main?.temp} F</p>
      <p className={"mt-2 "}><span className={"font-bold"}>Min Temperature :</span> {weather?.data?.main?.temp_max} F
      </p>
      <p className={"mt-2 "}><span className={"font-bold"}>Max Temperature :</span> {weather?.data?.main?.temp_min} F
      </p>
      <div className="flex items-center">
        <p><span className={"font-bold"}>Weather type :</span> {weather?.data?.weather[0]?.main}
        </p>
        {iconSrc && <img src={`http://openweathermap.org/img/wn/${iconSrc}.png`} width={30} height={30} alt="weather"/>}
      </div>
      <p className={"mt-2 "}><span className={"font-bold"}>Humidity :</span> {weather?.data?.main?.humidity}</p>
      <p className={"mt-2 "}><span className={"font-bold"}>Visibility :</span> {weather?.data?.visibility}</p>
      <p className={"mt-2 "}><span className={"font-bold"}>Wind Speed :</span> {weather?.data?.wind?.speed} km/h</p>
    </>
  );
};

export default Weather;
