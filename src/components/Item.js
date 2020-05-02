import React from 'react'

export default function Item (props) {

    //Loading de la data
    const data = require("../assets/dataset-example.json")

    //Fonction permettant de get un item par rapport à l'id passé en paramètre url
    const getItem = () => {
        var i = 0;
        while (data[i] !== 0) {
            if (data[i]._id.$oid === props.match.params.id) {
                console.log(data[i])
                return data[i];
            }
            i++;
        }
    }

    //Chargement de l'item spécifique à l'url
    const item = getItem();

    //Sauvegarde en local de la dernière fiche produit visitée
    localStorage.setItem("last", props.match.params.id);

    //Render principal (Pas très joli :p, mais va à l'essentiel)
    return (
        <div>
            <h1>Fiche Produit</h1>
            <h2>Product Name : {item.product_name}</h2>
            <h2>Supplier : {item.supplier}</h2>
            <h3>Quantity : {item.quantity}</h3>
            <h3>Unit Cost : {item.unit_cost}$</h3>
        </div>
    )
}