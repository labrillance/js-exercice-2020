import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import List from "../components/List"
import Item from "../components/Item"


export default function Routes(props) {
    //Router principal
    return (
        <>
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={List}/>
            {/* Route au cas ou il n'y a pas de dernière fiche visitée */}
            <Route path="/item/null" exact component={List}/>
            <Route path="/item/:id" exact component={(props) => <Item {...props}></Item>}/>
        </Switch>
        </BrowserRouter>
        </>
)}