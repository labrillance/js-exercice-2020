import React, { useState } from 'react'
import FlatList from 'flatlist-react'
import './List.css'
import SearchBar from "./SearchBar"
import {Link} from "react-router-dom"

const List = () => {

    // Je me suis permis de modifier les prix pour les filtrer plus facilement.

    //States pour les recherches
    const [search, setSearch] = useState("");

    //Fonction propre à la barre de recherche
    function handleChange(event) {
        const value = event.target.value;
        setSearch(value)
    }

    //Charge le local storage.
    var lasturi = localStorage.getItem("last");

    //Component pour Item qui n'existe pas
    const renderBlank = () => {
        return <p>Nothing to display yet...</p>;
    }

    //Loading de la data 
    var data = require("../assets/dataset-example.json");
    
    //Component pour chaque item
    const renderObject = (object, idx) => {
        return (
            <div className="item" key={idx}>
            <Link style={{color: 'black', textDecoration: "none"}} to={`/item/${object._id.$oid}`}>
              <h1 className="linktitle" style={{textDecoration: "none"}}>{object.product_name}</h1>
              <h2 className="linktitle">{object.supplier}</h2>
              <h3 className="price">{object.unit_cost}$</h3>
            </Link>
            </div>
        );
      }
    
    //Render principal
    return (
        <>
        <SearchBar search={search} handle={handleChange}/>
        <Link to={`/item/${lasturi}`}>
            <button className="lastbutton">Go to last visited page</button>
        </Link>
        <div className="list">
            <FlatList 
            list={data}
            renderItem={renderObject}
            renderWhenEmpty={renderBlank}
            sortBy="unit_cost"
            sort
            searchTerm={search}
            searchBy="product_name"
            >    
            </FlatList>
        </div>
        </>
    )
}

export default List