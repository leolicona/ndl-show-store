import mainStyles from "./mainStyles.module.css";
import Product from "../section/slider/Product";
import Card from "../../components /card/Card";


const Main = () => {
    return(
       <main className={mainStyles.main}>
            <div className={mainStyles.mainContainer}>
                <div className={mainStyles.wrapper}>
                    <Product>
                        <Card/>
                        <Card/>
                        <Card/>
                    </Product>

                </div>

            </div>
            
           
       </main>
    );
}
export default Main;