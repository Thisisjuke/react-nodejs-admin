import { User } from "../models/User"

export const getAllCountries = async (req, res) => {
    const users = await User.fetchAll()

    res.json([...new Set(users.map(user => user.attributes.country))]);
}

export const getAllCities = async (req, res) => {
    const users = await User.fetchAll()

    res.json([...new Set(users.map(user => user.attributes.city))]);
}

export const getAllCitiesFromCountry = async (req, res) => {
    const users = await User.where({country: req.params.country}).fetchAll()

    res.json([...new Set(users.map(user => user.attributes.city))]);
}

export const countCities = async (req, res) => {
    const users = await User.fetchAll()
    const cities = [...new Set(users.map(user => user.attributes.city))]

    res.json(cities.length);
}

export const countCountry = async (req, res) => {
    const users = await User.fetchAll()
    const countries = [...new Set(users.map(user => user.attributes.country))]

    res.json(countries.length);
}