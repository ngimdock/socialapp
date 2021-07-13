import React, {useState} from 'react';

function SearchBar(){
    const [searchValue, setSearchValue] = useState("");
    return (
        <input 
            type="text" 
            value={searchValue} 
            onChange={(event) => setSearchValue(event.target.value)}
            className="search"
            placeholder="Faire une recherche"
        />
    );
}


function FilterPub() {
    return (
        <select className="filter" id="">
            <option value="">popularité</option>
            <option value="">Date de publication</option>
            <option value="">nombre de partage</option>
        </select>
    );
}


export {SearchBar, FilterPub};