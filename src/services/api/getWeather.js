import axios from "axios";
import {useQuery} from 'react-query';

const url = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = (selectedCountry) => {
  return axios.get(url, {
    params: {
      appid: "03f5964a0fcf804dbf8dd8aa6b51b9af",
      lat: selectedCountry?.latlng[0],
      lon: selectedCountry?.latlng[1]
    }
  })
};

const GetWeatherUseQuery = (selectedCountry) => {
  return useQuery(['weather', selectedCountry], () => getWeather(selectedCountry));
};

export default GetWeatherUseQuery