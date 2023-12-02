import React from "react";
import { MdSearch } from 'react-icons/md';
import '../index.css';


const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="Search notes ..." />
            <MdSearch className="searchIcon" />
        </div>
    )
};


export default Search;  