import mainStyles from "./mainStyles.module.css";
import Product from "../section/slider/Product";
import Card from "../../components /card/Card";
import data from "../data";



const Main = () => {

    const Cards = data.map(item => {
        return(
            <Card
                text={item.description}
                image={item.coverImg}


            />
        )

        
    })

    return(
       <main className={mainStyles.main}>
            <div className={mainStyles.mainContainer}>
                <div className={mainStyles.wrapper}>
                    <Product>
                        {Cards}
                    </Product>

                </div>

            </div>
            
           
       </main>
    );
}
export default Main;