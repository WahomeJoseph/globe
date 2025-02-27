import { useState } from "react";
import type { Route } from "./+types/Countries";
import { Link } from "react-router";

export async function clientLoader() {
    const result = await fetch("https://restcountries.com/v3.1/all");
    const data = await result.json();
    return data;
}

export default function countries({loaderData}: Route.ComponentProps) {
    const [search, setSearch] = useState<string>('')
    const [region, setRegion] = useState<string>('')
    // filter search
    const filterCountries = loaderData.filter((country: any) => {

        const regionSearch = !region || country.region.toLowerCase() === region.toLowerCase()
        const matchSearch = !search || country.name.common.toLowerCase().includes(search.toLowerCase())
        return matchSearch && regionSearch
    })
    console.log(loaderData)
 
    return (
        <div className="bg-bgcolor h-screen p-6">
            <h1 className="text-2xl font-bold mb-6 text-gray-900">Countries</h1>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input type="text" 
                placeholder="Search by name" 
                value={search}
                onChange={(e) => setSearch(e.target.value)} 
                className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500"/>

                <select value={region} onChange={(e) => setRegion(e.target.value)} className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-indigo-500">
                    <option value="" className="bg-bgbtn">All Regions</option>
                    <option value="africa" className="bg-bgbtn">Africa</option>
                    <option value="america" className="bg-bgbtn">America</option>
                    <option value="asia" className="bg-bgbtn">Asia</option>
                    <option value="europe" className="bg-bgbtn">Europe</option>
                    <option value="oceania" className="bg-bgbtn">Oceania</option>
                </select>
            </div>
            {filterCountries.length === 0 ? ( <span className="text-red-500">Filters do not match any countries!</span>
         ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filterCountries.map((country:any) => (
                    <li key={country.cca3} className="bg-bgbtn border border-gray-200 rounded-md p-4 shadow-md hover:shadow-bgbtn transition">
                        <Link to={`/countries/${country.name.common}`} className="text-indigo-600 hover:underline text-lg font-semibold">
                        {country.name.common}
                        </Link>
                        <div className="text-gray-600 text-sm mt-1">
                            Region: {country.region} | Subregion: {country.subregion} | Capital: {country.capital} | Population: {country.population}
                        </div>
                    </li>
                ))}
            </ul> )}
        </div>
    );
}