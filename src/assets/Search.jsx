import React from "react";
import { MdSearch } from 'react-icons/md';
import '../index.css';


const Search = ({ handleSearchNote }) => {
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search notes ..."
                onChange={(event) =>
                    handleSearchNote(event.target.value)
                } />
            <MdSearch className="searchIcon" />
        </div>
    )
};

export default Search;  