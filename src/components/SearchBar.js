import React from 'react'
import "./SearchBar.scss"

const SearchBar = (props) => {

    return (
        <div className="container">
            <input type="text" placeholder="Search..." value={props.search} onChange={props.handle}></input>
            <div className="search"></div>
        </div>
    )
}

export default SearchBar