import productStyles from "./productStyles.module.css"



const Product = (props) => {
    return(
       <section className={productStyles.cardsContainer}>
            {props.children}
       </section>
    );
}
export default Product;