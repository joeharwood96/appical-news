import React from 'react';
import './Search.scss';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
    
    return (
        <div className="search">
            <div className="search-bar">
                <input type="text" className="search-bar-term" id="input_text" placeholder="Search articles..."></input>
                <button type="submit" className="search-bar-button">
                    <BiSearch />
                </button>
            </div>
        </div>
    )
}

export default Search;