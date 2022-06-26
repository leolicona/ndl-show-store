import logo from "../../assets/brand/ndl_logo.png";
import headerStyles from "./headerStyles.module.css"
import MainNav from "../../components /mainNav/MainNav"

const Header = () => {
    return(
        <header className={headerStyles.header}>
            <div className={headerStyles.wrapper}>
            <img className={headerStyles.logo} src={logo} alt=""/>
            <MainNav
            />
            </div>
        </header>
    );
}
export default Header;