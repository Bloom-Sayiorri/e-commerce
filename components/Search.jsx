"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Search() {
    const [ searchItem, setSearchItem ] = useState("");

    function handleChange(event) {
        setSearchItem(event.target.value);
    }

    function handleSearch(event) {

    }

    return (
        <form className="flex jusitfy-center items-center border-2 border-blue-300 rounded-2xl px-4 py-2">
            <input 
                type="text"
                placeholder="Search..."
                onChange={handleChange}
                className="placeholder-gray-400 focus:outline-none"
                value={searchItem}
            />
            <CiSearch className="text-2xl" onClick={handleSearch}/>   
        </form>
    );
}