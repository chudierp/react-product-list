import React from 'react'
import data from '../data.js';
import './ProductFilter.css'


export default function ProductFilter(props) {

    const { category } = props


    const display_cat = data.filter((item) => {

        return item.category === category || category === "All"

    }).map((item) => {
        return (
            
     <div className="Product">
        <h1> {item.name}, <i class="far fa-star"></i>{item.rating}</h1>
        <h2>{item.price}</h2>
        <p>{item.description}</p>
        <h3> Category: <button class="categorybutton">{item.category}</button></h3>
        <h4>Units: {item.units}</h4>
        </div>
        )
    })
    return (
        <div>
            
        {display_cat}

        </div>
    )
}