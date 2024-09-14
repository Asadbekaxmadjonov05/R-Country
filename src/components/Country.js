import React, { useState } from "react";
import CountryCard from "./CountryCard";

function Country() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  
  const countries = [
    { id: 1,
       name: "Wallis and Futuna",
       capital: "Mata-Utu",
       population: 11750,
       flag: "https://flagcdn.com/wf.svg",
       region: "Oceania",
       isLiked: false,
       isBasket: false 

    },

    { id: 2,
       name: "Iceland", 
      capital: "Reykjavik",
       population: 366425,
       flag: "https://flagcdn.com/is.svg",
       region: "Europe", 
      isLiked: false,
       isBasket: false

     },
    { id: 3,
       name: "Luxembourg",
       capital: "Luxembourg", 
      population: 632275,
       flag: "https://flagcdn.com/lu.svg",
       region: "Europe", 
      isLiked: false,
       isBasket: false },
    { id: 4,
       name: "Mali",
       capital: "Bamako",
       population: 20250834,
       flag: "https://flagcdn.com/ml.svg", 
      region: "Africa", 
      isLiked: false,
       isBasket: false

     },
    { id: 5, 
      name: "Comoros",
       capital: "Moroni",
       population: 869595, 
      flag: "https://flagcdn.com/km.svg",
       region: "Africa",
       isLiked: false, 
      isBasket: false },
    { id: 6, 
      name: "Australia",
       capital: "Canberra",
       population: 25687041,
       flag: "https://flagcdn.com/au.svg",
       region: "Oceania",
       isLiked: false,
       isBasket: false },
    { id: 7,
       name: "Estonia", 
      capital: "Tallinn", 
      population: 1331057,
       flag: "https://flagcdn.com/ee.svg",
       region: "Europe", 
      isLiked: false,
       isBasket: false },
    { id: 8,
       name: "Canada", capital: "Ottawa",
       population: 38005238, 
      flag: "https://flagcdn.com/ca.svg",
       region: "America",
       isLiked: false,
       isBasket: false },
    { id: 9,
       name: "Belarus", 
      capital: "Minsk",
       population: 9398861, 
      flag: "https://flagcdn.com/by.svg", 
      region: "Europe",
       isLiked: false,
       isBasket: false },

    { id: 10,
       name: "Guyana",
       capital: "Georgetown",
       population: 786559, 
      flag: "https://flagcdn.com/gy.svg",
       region: "America",
       isLiked: false, 
      isBasket: false }
  ];
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  const filteredCountries = countries.filter(country => {
    return (
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRegion === '' || country.region === selectedRegion)
    );
  });

  return (
    <main >
      <section >
        <div className="flex items-center justify-between mx-[80px]">
                  {/* Search Input */}
  
          <input 
            placeholder="Search for a country…" 
            type="search" 
            className="dark:text-[#2B3844]  text-white bg-[#2B3844] dark:bg-white w-[480px]  pl-[32px] shadow-md focus:shadow-lg my-[48px] flex items-center gap-[24px]  pr-[32px] py-[18px]"            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

        {/* Filter by Region */}
        <div className=" relative inline-block w-[200px]  ">
          <select
            className="block appearance-none w-full bg-[#2B3844] dark:bg-white dark:text-[#2B3844]  text-white border border-gray-400 hover:border-gray-500 px-4 py-[18px] pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="">Filter by Region</option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
        </div>
        {/* Country Cards */}
        <ul className=" flex flex-wrap justify-between gap-[20px] mx-[80px]">
          {filteredCountries.map((item) => (
            <CountryCard key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Country;
