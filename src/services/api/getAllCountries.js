import axios from "axios";
import { useQuery } from 'react-query';

const url = 'https://restcountries.com/v3.1/all';

const getAllCountries = () => {
 return axios.get(url)
};

const AllCountriesUseQuery = () => {
 return useQuery('countries', getAllCountries);
};

export default AllCountriesUseQuery