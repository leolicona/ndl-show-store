import datesStyles from "./datesStyles.module.css"
import image from '../../../assets/images/ndl3.jpg'


const Dates = () => {
    return(
       <section className={datesStyles.cardsContainer}>
        <h3>Sigue nuestro recorrido en husaca de Ocampo</h3>
        <p>
        Con música en vivo antorchas y personajes sobrenaturales. 
        
        </p>

        <img  className={datesStyles.image}src={image} alt=""/>
        



       </section>
    );
}
export default Dates;