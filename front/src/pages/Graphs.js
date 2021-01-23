import React, {useEffect, useState} from "react";
import {fetchData} from "../lib/api";
import GithubCard from "../components/Cards/GithubCard";
import List from "../components/List";

export default function Graphs() {
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCities, setSelectedCities] = useState(["Click a Country to see his cities"]);

    useEffect(() => {
        loadData();
    }, []);

    const fetchCities = async (city) => {
        setSelectedCities(await fetchData(`api/country/${encodeURI(city)}/cities`));
    }

    const loadData = async () => {
        setCountries(await fetchData('api/countries'));
        setCities(await fetchData('api/cities'));
    };
    
    return (
        <main className="flex-1 h-screen max-h-screen p-5 overflow-hidden overflow-y-scroll">
            <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b border-gray-600 lg:items-center lg:space-y-0 lg:flex-row">
                <h1 className="text-2xl font-semibold whitespace-nowrap">Stats</h1>
                <GithubCard url={'https://github.com/Thisisjuke/yubo-test'} />
            </div>

            <div className={"flex space-x-6 mt-8"}>
                <div className={"w-1/4"}>
                    <List title={"Countries"} data={countries} countryCallback={city => fetchCities(city)}/>
                </div>
                <div className={"w-1/4"}>
                    <List title={"Cities"}  data={cities} countryCallback={() => {}} disabled/>
                </div>
                <div className={"w-1/4"}>
                    <List title={"Cities by Country"} data={selectedCities} countryCallback={() => {}} disabled/>
                </div>
            </div>
        </main>
    );
}
