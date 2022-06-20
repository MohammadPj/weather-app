import axios from "axios";
import { useQuery } from 'react-query';

const url = 'https://restcountries.com/v3.1/all';

const getAllCountries = () => {
 return axios.get(url)
};

const AllCountriesUseQuery = (enabled = true) => {
 return useQuery('countries', getAllCountries, {
  enabled,
 });
};

export default AllCountriesUseQuery