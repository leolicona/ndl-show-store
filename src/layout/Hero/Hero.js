import heroStyles from './heroStyles.module.css'
import heroImage from '../../assets/images/ndl1.jpg'

const Hero = () => {
    return(
        <section className={heroStyles.hero}>
            <img className={heroStyles.heroImage} src={heroImage} alt=""/> 
        </section>
    );
}

export default Hero;