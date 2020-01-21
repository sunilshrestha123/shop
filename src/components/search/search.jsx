import React from 'react';
import sprite from '../../image/search.png'
import  './search-style.scss'

const Search = () => {
    return (
        <div>
            <form action="#" className="search">
                <input
                    type="text"
                    className="search_input"
                    placeholder="search Products"
                />
            </form>
        </div>
    );
};

export default Search;