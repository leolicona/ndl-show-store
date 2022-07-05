import mainStyles from "./mainStyles.module.css"
import Dates from "../section/Dates/Dates"


const Main = () => {
    return(
       <main className={mainStyles.main}>
            <div className={mainStyles.mainContainer}>
                <div className={mainStyles.wrapper}>
                <Dates/>

                </div>

            </div>
            
           
       </main>
    );
}
export default Main;