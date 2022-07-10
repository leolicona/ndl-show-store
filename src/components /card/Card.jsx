import React from "react";
import cardStyles from "./cardStyles.module.css"
import image from '../../assets/images/ndl3.jpg'

export default function Card () {
    return(
        <article className={cardStyles.cardContainer}>
            <div className={cardStyles.cardText}>
                <h3 >
                    Texto sobre la imagen.
                </h3>
            </div>
            <img className={cardStyles.cardImage} src={image} alt=""/>
            
        </article >
    )
}