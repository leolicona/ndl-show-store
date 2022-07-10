import React from "react";
import cardStyles from "./cardStyles.module.css"
import image from '../../assets/images/ndl3.jpg'

export default function Card (props) {
    return(
        <article className={cardStyles.cardContainer}>
            <div className={cardStyles.cardText}>
                <h3 >
                
                </h3>
            </div>
            <img className={cardStyles.cardImage} src={props.image} alt=""/>
            
        </article >
    )
}