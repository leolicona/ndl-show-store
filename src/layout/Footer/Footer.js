import footerStyles from "./footerStyles.module.css"
const Footer = () => {
    return(
        <footer className={footerStyles.footer}>
            <div className={footerStyles.mainContainer}>
                <div className={footerStyles.wrapper}>
                         <div className={footerStyles.firstContainer}>
                        <div>
                            <p>Contenido 1</p>
                        </div>
                        <div>
                            <p>Contenido 1</p>  
                        </div>
                        <div>
                            <p>Contenido 1</p>
                        </div>
                    </div> 
                    <div className={footerStyles.secondContainer}>
                        <span>Todos los derechos reservados ®2022</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;