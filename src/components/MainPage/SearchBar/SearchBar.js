import React from 'react';
import style from './SearchBar.module.css';

const SearchBar = ({ searchHeroes }) => {

    const search = (event) => {
        if (event.charCode === 13) {
            const text = event.target.value;
            searchHeroes(text)
        }
    }
    return (
        <div className={style.margin}>
            <input className="form-control mr-sm-2" type="search" placeholder="Type hero and press enter" aria-label="Search" onKeyPress={search} />
        </div>
    )
}

export { SearchBar };