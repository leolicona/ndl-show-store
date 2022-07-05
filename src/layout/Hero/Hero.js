import heroStyles from './heroStyles.module.css'
import heroImage from '../../assets/images/ndl8.jpg'

const Hero = () => {
    return(
        <section className={heroStyles.heroSection}>
            <img className={heroStyles.heroImage} src={heroImage} alt=""/> 
            <div className={heroStyles.cover}>
                <div className={heroStyles.mainContainer}>
                    <div className={heroStyles.wrapper}>
                        <h1> ¡Venid y Seguid el Fuego!</h1>
                        <p>
                        El espectáculo nocturno número uno de la comarca minera.
                        Historias, mitos y leyendas serán revelados en nuestro andar
                        por las calles del pueblo.
                        </p>
                        <button>¡Reserva ahora!</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;