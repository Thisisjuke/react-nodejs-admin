import {
    countCities,
    countCountry,
    getAllCities,
    getAllCitiesFromCountry,
    getAllCountries
} from "../handlers/countriesHandler";

export default [
    {
        url: '/api/countries',
        handler: getAllCountries
    },
    {
        url: '/api/cities',
        handler: getAllCities
    },
    {
        url: '/api/country/:country/cities',
        handler: getAllCitiesFromCountry
    },
    {
        url: '/api/count/countries',
        handler: countCountry
    },
    {
        url: '/api/count/cities',
        handler: countCities
    },
]