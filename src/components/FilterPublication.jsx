import React, {useState} from 'react';

function SearchBar(){
    const [searchValue, setSearchValue] = useState("");
    return (
        <input 
            type="text" 
            value={searchValue} 
            onChange={(event) => setSearchValue(event.target.value)}
            className="search"
            placeholder="chercher un nom.."
        />
    );
}


function FilterPub() {

    const [filterValue, setFilterValue] = useState("pertinance");
    console.log(filterValue);
    const handleChangeFilter = (event) => {
        setFilterValue(event.target.value)
    };
    console.log(filterValue);

    return (
        <select className="filter" value={filterValue} onChange={handleChangeFilter}>
            <option value="pertinance">pertinance</option>
            <option value="datePublication">Date de publication</option>
            <option value="popularite">popularité</option>
        </select>
    );
}


export {SearchBar, FilterPub};